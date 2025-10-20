// src/contexts/GlobalContext.jsx
import React, { createContext, useState, useMemo } from "react";
import { useSystemInfo } from "../hooks/useSystemInfo";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const systemInfo = useSystemInfo();
  const [appState, setAppState] = useState({
    theme: "light",
    language: "zh-CN",
  });

  const updateGlobalState = (updates) => {
    setAppState((prev) => ({ ...prev, ...updates }));
  };

  const resetGlobalState = () => {
    setAppState({
      theme: "light",
      language: "zh-CN",
    });
  };

  const value = useMemo(
    () => ({
      // 系统信息
      ...systemInfo,

      // 应用状态
      appState,

      // 操作方法
      updateGlobalState,
      resetGlobalState,

      // 工具函数
      isWindows: () => systemInfo.platform === "windows",
      isMac: () => systemInfo.platform === "darwin",
      isLinux: () => systemInfo.platform === "linux",
    }),
    [systemInfo, appState]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
