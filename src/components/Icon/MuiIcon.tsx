// icons.ts
// 仅按需导入你会用到的 MUI 图标
import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InfoIcon from "@mui/icons-material/Info";
import StorageIcon from "@mui/icons-material/Storage";

// ...

export const muiIconMap = {
  home: HomeIcon,
  proxy: CloudIcon,
  download: DownloadIcon,
  config: SettingsIcon,
  logger: ListAltIcon,
  about: InfoIcon,
  server: StorageIcon,
  // ...
} as const;

// 通用渲染组件
import React from "react";
import type { SvgIconProps } from "@mui/material";

export function MuiIcon({
  name,
  ...props
}: { name: keyof typeof muiIconMap } & SvgIconProps) {
  const Cmp = muiIconMap[name];
  if (!Cmp) return null; // 或者返回一个兜底图标
  return <Cmp {...props} />;
}
