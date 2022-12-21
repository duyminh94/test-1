import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [

    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "ManagerUsers",
        path: "/managerUsers",
        icon: <AiIcons.AiOutlineUser />,
        cName: "nav-text"
    },
    {
        title: "ManagerProducts",
        path: "/managerProducts",
        icon: <FaIcons.FaProductHunt />,
        cName: "nav-text"
    },
]