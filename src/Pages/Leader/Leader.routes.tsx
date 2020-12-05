import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Route } from "../../Models/Route";

export const routes: Route[] = [
  {
    title: "Home",
    path: "/leaders",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Attacks",
    path: "/leaders/attacks",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Events",
    path: "/leaders/events",
    icon: <FaIcons.FaCartPlus />,
  },
];
