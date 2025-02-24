import { ImgFilter } from "../Img/types";

export type Props = {
  src: string;
  transitionDuration: number;
  numberOfLoops: number;
  scale?: number;
  filter?: ImgFilter;
};
