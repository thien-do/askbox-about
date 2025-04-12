export const RELEASE_USER_MAP = {
  an: "https://github.com/ducan-ne",
  chinh: "https://www.linkedin.com/in/chinhnq",
  hai: "https://github.com/ng-hai",
  huy: "https://github.com/huyng12",
  kha: "https://github.com/nguyenkhatran",
  khoa: "https://github.com/ldakhoa",
  minh: "https://github.com/monodyle",
  my: "#",
  nhi: "https://github.com/NgocNhi123",
  quang: "https://github.com/iamquang95",
  tran: "#",
} satisfies Record<string, string>

export type ReleaseUser = keyof typeof RELEASE_USER_MAP

export function isReleaseUser(name: string): name is ReleaseUser {
  return name in RELEASE_USER_MAP
}
