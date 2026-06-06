import { nodeLib } from "@bjmhe/viteplus-preset";

export default nodeLib(
  {},
  {
    run: {
      tasks: {
        autofix: ["vpx automd", "vp check --fix"],
      },
    },
    pack: {
      exports: {
        bin: true,
      },
    },
  },
);
