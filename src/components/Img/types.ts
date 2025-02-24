import { ImgProps } from "remotion";

export const IMG_FILTERS = ["grainy"] as const;

export type ImgFilter = (typeof IMG_FILTERS)[number];

export type Props = ImgProps & {
  filter?: ImgFilter;
};
