import { nodeLib } from "@bjmhe/viteplus-preset";

export default nodeLib(
  {},
  {
    run: {
      tasks: {
        autofix: ["vpx automd", "vpx bjmhe fetch", "vp check --fix"],
      },
    },
    pack: {
      exports: {
        bin: true,
      },
    },
  },
);
