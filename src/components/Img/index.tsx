import { AbsoluteFill, Img as RemotionImg } from "remotion";
import { Props } from "./types";
import { memo } from "react";
import clsx from "clsx";

const Img: React.FC<Props> = ({ filter, ...props }) => {
  if (filter === "grainy") {
    return (
      <AbsoluteFill className={clsx(props.className, "grain")}>
        <RemotionImg {...props} className={"h-full object-cover"} />
      </AbsoluteFill>
    );
  }

  return <RemotionImg {...props} />;
};

export default memo(Img);
