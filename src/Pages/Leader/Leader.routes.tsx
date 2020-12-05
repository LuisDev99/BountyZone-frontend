import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Route } from "../../Models/Route";
import Home from "./Home/Home";
import Attacks from "./Attacks/Attacks";

const base = "/leaders";

export const routes: Route[] = [
  {
    title: "Home",
    path: `${base}/home`,
    icon: <AiIcons.AiFillHome />,
    component: Home,
  },
  {
    title: "Attacks",
    path: `${base}/attacks`,
    icon: <IoIcons.IoIosPaper />,
    component: Attacks,
  },
];
