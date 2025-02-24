import { FC, memo } from "react";
import { Folder, Composition } from "remotion";
import { z } from "zod";
import { CameraVideo } from "./compositions/";
import { IMG_FILTERS } from "./components/Img/types";

const Compositions: FC = () => {
  return (
    <Folder name="Compositions">
      <Composition
        id="CameraVideo"
        component={CameraVideo}
        width={1080}
        height={1920}
        fps={60}
        durationInFrames={60 * 7 * 2}
        schema={z.object({
          image: z.string().url(),
          previousImage: z.string().url(),
          isVideo: z.boolean(),
          recording: z.boolean(),
          showGrid: z.boolean(),
          filter: z.enum(IMG_FILTERS).optional(),
        })}
        defaultProps={{
          image:
            "https://images.unsplash.com/photo-1563051958-1e6efde6e040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=100",
          previousImage:
            "https://images.unsplash.com/photo-1556631045-59c365dee79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=100",
          isVideo: true,
          recording: true,
          showGrid: true,
          filter: "grainy",
        }}
      />
    </Folder>
  );
};

export default memo(Compositions);
