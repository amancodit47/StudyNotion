import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    console.log("My Route is : ", route);
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <NavLink
      to={link.path}
      className={`relative px-8 py-2 text-lg font-medium ${
        matchRoute(link.path)
          ? "bg-yellow-800 text-yellow-5 font-bold text-xl"
          : "bg-opacity-0"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {Icon && <Icon className="text-lg" />}{" "}
        {/* Check if Icon is defined or not if it is not present then <Icon/> will not be rendered*/}
        <span>{link.name}</span>
      </div>
    </NavLink>
  );
}
