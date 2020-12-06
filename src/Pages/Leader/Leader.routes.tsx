import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Route } from "../../Models/Route";
import Home from "./Home/Home";
import Bounties from "./Bounties/Bounties";

const base = "/leaders";

export const routes: Route[] = [
  {
    title: "Home",
    path: `${base}/home`,
    icon: <AiIcons.AiFillHome />,
    component: Home,
  },
  {
    title: "Bounties",
    path: `${base}/attacks`,
    icon: <IoIcons.IoIosPaper />,
    component: Bounties,
  },
];
