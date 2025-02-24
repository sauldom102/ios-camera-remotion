import { ImgFilter } from "@/components/Img/types";

export type Props = {
  image: string;
  previousImage?: string;
  isVideo?: boolean;
  recording?: boolean;
  filter?: ImgFilter;
  showGrid?: boolean;
};
