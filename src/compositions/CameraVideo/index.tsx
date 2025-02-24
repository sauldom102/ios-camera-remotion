/* eslint-disable react/no-danger */
import { CameraFrame, ExploringImage } from "@/components";
import { Props } from "./types";
import { FC } from "react";
import { useVideoConfig } from "remotion";

const CameraVideo: FC<Props> = ({
  image,
  previousImage,
  isVideo = false,
  recording = false,
  showGrid = true,
  filter,
}) => {
  const { fps } = useVideoConfig();

  return (
    <CameraFrame
      image={image}
      previousImage={previousImage}
      isVideo={isVideo}
      recording={recording}
      showGrid={showGrid}
    >
      <ExploringImage
        src={image}
        filter={filter}
        transitionDuration={fps * 2}
        numberOfLoops={1}
        scale={1.5}
      />
    </CameraFrame>
  );
};

export default CameraVideo;
