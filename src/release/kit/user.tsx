import { ReactElement } from "react"

const URLS = {
	chinh: "https://www.linkedin.com/in/chinhnq",
	hai: "https://github.com/ng-hai",
	"Nhi Ly": "https://github.com/NgocNhi123",
	"huy": "https://github.com/rknguyen",
	"khoa": "https://github.com/ldakhoa",
	"monody": "https://github.com/monodyle"
}

export function ReleaseUser(props: {
	name: keyof typeof URLS
}): ReactElement {
	const { name } = props

	const url = URLS[name]

	// This should not happen type-wise,
	// but since this component is used in markdown,
	// we do need to handle this case.
	if (url === undefined)
		throw new Error(`Unknown user: ${name}`)

	return <a target="_blank" href={url}>@{name}</a>
}
