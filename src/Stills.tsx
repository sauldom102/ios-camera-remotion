import { FC, memo } from "react";
import { Folder, Still } from "remotion";
import { z } from "zod";
import { CameraPicture } from "./stills/";
import { IMG_FILTERS } from "./components/Img/types";

const Stills: FC = () => {
  return (
    <Folder name="Stills">
      <Still
        id="CameraPicture"
        component={CameraPicture}
        width={1080}
        height={1920}
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
            "https://images.unsplash.com/photo-1562693774-4303a7ff9e7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=100",
          previousImage:
            "https://images.unsplash.com/photo-1542224505-749606cbac31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
          isVideo: false,
          recording: false,
          showGrid: true,
          filter: "grainy",
        }}
      />
    </Folder>
  );
};

export default memo(Stills);
