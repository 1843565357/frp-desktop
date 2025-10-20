import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

// 自定义 Hook 便于使用
export const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }

  return context;
};
