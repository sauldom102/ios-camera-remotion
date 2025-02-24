import { ReactNode } from "react";

export type Props = {
  image: string;
  previousImage?: string;
  isVideo?: boolean;
  recording?: boolean;
  showGrid?: boolean;
  children?: ReactNode;
};
