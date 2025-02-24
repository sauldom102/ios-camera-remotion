import { CameraFrame, Img } from "@/components";
import { Props } from "./types";
import { FC } from "react";

const CameraPicture: FC<Props> = ({
  image,
  previousImage,
  isVideo = false,
  recording = false,
  showGrid = true,
  filter,
}) => (
  <CameraFrame
    image={image}
    previousImage={previousImage}
    isVideo={isVideo}
    recording={recording}
    showGrid={showGrid}
  >
    <Img
      src={image}
      filter={filter}
      className="w-full h-full object-cover object-center"
    />
  </CameraFrame>
);

export default CameraPicture;
