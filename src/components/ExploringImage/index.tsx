import { FC, memo, useMemo } from "react";
import { Loop, Sequence, useVideoConfig } from "remotion";
import Img from "../Img";

import { Animated, Scale } from "remotion-animated";
import { moveAnimationSeries } from "@/utils/animationSeries";
import { Props } from "./types";

const ExploringImage: FC<Props> = ({
  src,
  transitionDuration,
  numberOfLoops,
  scale = 1.1,
  filter,
}) => {
  const { width, height } = useVideoConfig();

  const newWidth = width * scale;
  const newHeight = height * scale;

  const widthLeft = (newWidth - width) / 2;
  const heightLeft = (newHeight - height) / 2;

  const movements = useMemo(
    () =>
      moveAnimationSeries(
        [
          {
            x: widthLeft,
            y: heightLeft,
          },
          {
            x: -widthLeft * 2,
          },
          {
            x: widthLeft * 2,
            y: -heightLeft * 2,
          },
          {
            x: -widthLeft * 2,
          },
          {
            x: widthLeft,
            y: heightLeft,
          },
        ],
        transitionDuration,
        transitionDuration,
      ),
    [widthLeft, heightLeft, transitionDuration],
  );

  return (
    <>
      <Sequence layout="absolute-fill" showInTimeline={false}>
        <Loop
          durationInFrames={
            transitionDuration * 2 + transitionDuration * movements.length
          }
          times={numberOfLoops}
          layout="none"
        >
          <Animated
            animations={[
              Scale({
                by: scale,
                duration: transitionDuration,
              }),
              ...movements,
              Scale({
                by: 1 / scale,
                duration: transitionDuration,
                start: transitionDuration * (movements.length + 1),
              }),
            ]}
            className="absolute w-full h-full"
          >
            <Img
              src={src}
              filter={filter}
              className="w-full h-full object-cover"
            />
          </Animated>
        </Loop>
      </Sequence>
    </>
  );
};

export default memo(ExploringImage);
