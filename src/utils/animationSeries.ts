import { Move, MoveOptions } from "remotion-animated";

export const moveAnimationSeries = (
  animations: MoveOptions[],
  movementDuration: number,
  offset = 0,
) => {
  const movements = animations.map((animation, i) => {
    const options: MoveOptions = {
      ...animation,
      duration: movementDuration,
      start: offset + movementDuration * i,
    };
    return Move(options);
  });
  return movements;
};
