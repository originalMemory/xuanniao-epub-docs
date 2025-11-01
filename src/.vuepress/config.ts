import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "玄鸟 epub 编辑器",
  description: "软件使用手册",

  theme,

  // 设置浏览器标签图标
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
