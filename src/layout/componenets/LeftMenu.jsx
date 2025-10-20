// LeftMenu.tsx
import { useLocation, useNavigate } from "react-router";
import { MuiIcon } from "../../components/Icon/MuiIcon";
import { routes } from "../../router";

export const LeftMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const root = routes.routes.find((r) => (r.path ?? "/") === "/");
  const menu = (root?.children ?? []).filter(
    (r) => r.handle && r.handle.icon && r.path // 没有 path 的正好跳过 index
  );
  console.log(pathname);

  const isSelected = (path, exact) => {
    if (exact) return pathname === path; // 首页精确匹配
    return pathname === path || pathname.startsWith(path + "/");
  };

  const handleClick = (path) => {
    if (pathname !== path) navigate(path);
  };

  return (
    <div className="lm-container">
      <div className="logo-container">
        <img src="/tauri.svg" className="logo" alt="Logo" />
      </div>
      <ul className="lm-list">
        {menu.map((item) => (
          <li
            key={item.path}
            className={`lm-item ${
              isSelected(item.path, item.handle.exact) ? "is-active" : ""
            }`}
            onClick={() => handleClick(item.path)}
          >
            <MuiIcon name={item.handle.icon}></MuiIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};
