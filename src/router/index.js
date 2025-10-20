import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../views/home";
import { Layout } from "../layout/index.jsx";
import { Proxy } from "../views/proxy/index.js";
import { Download } from "../views/download/index.js";
import { Config } from "../views/config/index.js";
import { Logger } from "../views/logger/index.js";
import { About } from "../views/about/index.js";
import { Server } from "../views/server/index.js";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/home",
        Component: Home,
        handle: {
          title: "Home",
          icon: "home",
        },
      },
      {
        path: "/server",
        Component: Server,
        handle: {
          title: "server",
          icon: "server",
        },
      },
      {
        path: "/download",
        Component: Download,
        handle: {
          title: "download",
          icon: "download",
        },
      },
      {
        path: "/proxy",
        Component: Proxy,
        handle: {
          title: "proxy",
          icon: "proxy",
        },
      },

      {
        path: "/config",
        Component: Config,
        handle: {
          title: "config",
          icon: "config",
        },
      },
      {
        path: "/logger",
        Component: Logger,
        handle: {
          title: "logger",
          icon: "logger",
        },
      },
      {
        path: "/about",
        Component: About,
        handle: {
          title: "about",
          icon: "about",
        },
      },
    ],
  },
]);
