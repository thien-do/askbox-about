import { ReactElement } from "react";

export function ReleaseVideo(props: {
  src: string;
}): ReactElement {
  const { src } = props;

  return (
    <video
      className="w-full aspect-video"
      src={src}
      controls
    />
  )
}