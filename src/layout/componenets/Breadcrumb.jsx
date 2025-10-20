import { useLocation, useMatches, Link } from "react-router";
import { MuiIcon } from "../../components/Icon/MuiIcon";
import { Children } from "react";

export const Breadcrumb = ({ children }) => {
  const matches = useMatches();
  const { pathname } = useLocation();

  // 过滤出在 handle 里定义了 title 的路由，生成面包屑
  const crumbs = matches
    .filter((m) => m.handle && m.handle.title)
    .map((m) => ({
      title: m.handle.title,
      icon: m.handle.icon,
      path: m.pathname || m.pathnameBase || "/",
    }));

  const current = crumbs[crumbs.length - 1];

  return (
    <div className="flex justify-between items-center breadcrumb">
      <div className="flex items-center breadcrumb-left">
        {current?.icon ? (
          <MuiIcon name={current.icon} className="inline-block mr-2" />
        ) : null}
        <span>{current?.title}</span>
      </div>
      <div className="flex items-center breadcrumb-right">{children}</div>
    </div>
  );
};
