/* eslint-disable react/no-danger */
import { AbsoluteFill, interpolate, staticFile } from "remotion";
import { Img } from "remotion";

import { Props } from "./types";
import { FC } from "react";

const CameraFrame: FC<Props> = ({
  image,
  previousImage,
  isVideo = false,
  recording = false,
  showGrid = true,
  children,
}) => {
  const optionBarTranslateX = interpolate(isVideo ? 1 : 0, [0, 1], [-245, -77]);

  return (
    <AbsoluteFill className="bg-positive-green text-white">
      <div className="absolute top-0 left-0 right-0 flex flex-row justify-between items-center px-8 py-16 bg-black/50">
        <Img src={staticFile("svg/flash-icon.svg")} width={70} />
        <Img src={staticFile("svg/hide-icon.svg")} width={70} />
        <Img src={staticFile("svg/motion-right-icon.svg")} width={70} />
      </div>

      <AbsoluteFill className="-z-10">{children}</AbsoluteFill>

      {/* Grid */}
      {showGrid && (
        <AbsoluteFill>
          <div className="w-[1px] h-full bg-white/50 absolute left-1/3" />
          <div className="w-[1px] h-full bg-white/50 absolute left-2/3" />
          <div className="h-[1px] w-full bg-white/50 absolute top-1/3" />
          <div className="h-[1px] w-full bg-white/50 absolute top-2/3" />
        </AbsoluteFill>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-black/50">
        <div
          className="w-[1400px] flex min-w-full justify-around items-center py-10 px-5 uppercase text-4xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white/10 via-white to-white/10"
          style={{
            transform: `translateX(${optionBarTranslateX}px)`,
          }}
        >
          <p>Time-Lapse</p>
          <p>Cinematic</p>
          <p className={isVideo ? "text-activeCameraOption font-medium" : ""}>
            Video
          </p>
          <p className={isVideo ? "" : "text-activeCameraOption font-medium"}>
            Photo
          </p>
          <p>Portrait</p>
          <p className="-z-20">Panoramic</p>
        </div>

        <div className="flex w-full flex-row justify-around items-center pt-10 pb-24 px-5">
          {previousImage && (
            <Img
              src={previousImage}
              className="w-[130px] aspect-square object-cover rounded-xl"
            />
          )}
          <div className="flex justify-center items-center w-[190px] aspect-square rounded-full border-white border-8">
            {!isVideo && (
              <div className="w-[160px] aspect-square rounded-full bg-white" />
            )}
            {isVideo && recording && (
              <div
                className={`${
                  recording ? "w-[65px]" : "w-[160px]"
                } aspect-square ${recording ? "rounded-xl" : "rounded-full"} ${
                  recording ? "bg-red-500" : "bg-white"
                }`}
              />
            )}
            {isVideo && !recording && (
              <div className="w-[160px] aspect-square rounded-full bg-red-500" />
            )}
          </div>
          <div className="flex justify-center items-center w-[130px] aspect-square rounded-full bg-black/25">
            <Img
              src={staticFile("svg/arrow-triangle-circle-path.svg")}
              className="filter"
              width={70}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default CameraFrame;
