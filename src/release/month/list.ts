import nodePath from "node:path"
import nodeFile from "node:fs/promises"

interface Year {
  year: number
  months: number[]
}

export async function listReleaseMonth(): Promise<Year[]> {
  const map = new Map<number, Set<number>>()

  const dir = nodePath.join(process.cwd(), "src/release/note")
  const files = await nodeFile.readdir(dir)

  files.forEach((file) => {
    // file format should be like 2024-12-31.mdx
    const parts = file.replace(".mdx", "").split("-")

    const year = parseInt(parts.at(0) ?? "", 10)
    if (Number.isNaN(year))
      throw new Error(`Cannot parse year from "${file}"`)

    const month = parseInt(parts.at(1) ?? "", 10)
    if (Number.isNaN(month))
      throw new Error(`Cannot parse month from "${file}"`)

    const months = map.get(year) ?? new Set()
    months.add(month)
    map.set(year, months)
  })

  const years = [...map.entries()]
    .map((entry) => {
      const [year, monthSet] = entry
      const months = [...monthSet].sort((a, b) => a - b)
      return { year, months }
    })
    .sort((a, b) => a.year - b.year)

  return years
}