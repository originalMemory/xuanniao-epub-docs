import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "玄鸟 epub 编辑器",
  description: "软件使用手册",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
