// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind-v4";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

Config.overrideWebpackConfig((config) => {
  return {
    ...config,
    ...enableTailwind(config),
    resolve: {
      ...config.resolve,
      plugins: [...(config.resolve?.plugins ?? []), new TsconfigPathsPlugin()],
    },
  };
});

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
