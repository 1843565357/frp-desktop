// src/hooks/useSystemInfo.js
import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import GlobalConstant from "../constant/GlobalConstant";

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({
    arch: "",
    os: "",
    frpSuffix: "",
  });

  useEffect(() => {
    const loadSystemInfo = async () => {
      // 使用 Tauri command 获取系统信息
      const info = await invoke("get_system_info");

      // 构建平台 key (如: windows_x86_64)
      const platformKey = `${info.os}_${info.arch}`;

      // 从映射表中获取 FRP 的 OS 和架构后缀
      const mapping = GlobalConstant.FRP_ARCH_VERSION_MAPPING[platformKey];

      if (!mapping) {
        throw new Error(`不支持的平台: ${platformKey}`);
      }

      const frpExtension =
        info.os === "windows"
          ? GlobalConstant.ZIP_EXT
          : GlobalConstant.TAR_GZ_EXT;

      //匹配后缀
      const [frpOs, frpArch] = mapping;
      const frpSuffix = `${frpOs}_${frpArch}${frpExtension}`;

      setSystemInfo({
        os: info.os,
        arch: info.arch,
        frpSuffix,
      });
    };

    loadSystemInfo();
  }, []);

  return systemInfo;
};
