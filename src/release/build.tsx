import { ReactElement } from "react";

export function ReleaseBuild(props: {
  children: ReactElement;
}): ReactElement {
  const { children } = props;

  return (
    <>
      <dialog>
        <button autoFocus>Close</button>
        {children}
      </dialog>
      <button>Show the dialog</button>
    </>
  )
}