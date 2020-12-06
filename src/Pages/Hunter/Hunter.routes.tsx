import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Route } from "../../Models/Route";
import Home from "./Home/Home";
import Map from "./Map/Map";

const base = "/hunters";

export const routes: Route[] = [
  {
    title: "Home",
    path: `${base}/home`,
    icon: <AiIcons.AiFillHome />,
    component: Home,
  },
  {
    title: "Map",
    path: `${base}/map`,
    icon: <IoIcons.IoIosPaper />,
    component: Map,
  },
];
