import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { lighten } from "@mui/material";
export default function Header() {
  const menuitem = [
    { path: "", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/service", name: "Service" },
    { path: "/login", name: "Login" },
    { path: "/signUp", name: "Sign Up" },
    {path:"/contact", name:"Contact"},
  ];

  const [color, setColor] = useState(false);
  const [menu, setMenu] = useState(true);
  const [bright, setBright] = useState(false);
  const [light, setLight] = useState("light");
  const [active, setActive] = useState(0);

  const element = document.documentElement;

  useEffect(() => {
    switch (light) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("light", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("light", "light");
        break;
      default:
        localStorage.removeItem("light");
    }
  }, [light]);

  const handleLight = () => {
    setLight(light === "dark" ? "light" : "dark");
    setBright(!bright);
  };

  // for change menu to close bar
  const changeMenu = () => {
    setMenu(!menu);
  };
  // change bg of navbar
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div>
      <div
        className={`p-8  flex font-serif  text-xl  bg-gradient-to-r from-blue-500 to-transparent  right-0 top-0 left-0  fixed justify-between 
        ${color && "bg-red-500 "} bg-gray-800 text-white `}
      >
        <div>
          <h1 className="font-bold text-gray-100 italic"> Home.net </h1>
        </div>
        <div className="flex gap-6 md:hidden">
          {menuitem.map((items, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setActive(i);
                }}
                className={`list-none ${
                  active == i && " underline underline-offset-8"
                } `}
              >
                <Link to={items.path}> {items.name}</Link>
              </li>
            );
          })}

          <button
            className="w-14 h-8 text-2xl rounded-full bg-white text-black dark:bg-black dark:text-gray-50 m-1"
            onClick={handleLight}
          >
            {bright ? (
              <LightModeIcon className="dark:bg-white dark:text-gray-400 dark:w-14 dark:h-8 dark:rounded-full" />
            ) : (
              <NightlightRoundOutlinedIcon />
            )}
          </button>
        </div>
        <div className="hidden md:flex flex-col justify-end place-content-end">
          <div className="ml-20">
            <button onClick={changeMenu}>
              {menu ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
          <div
            className={`flex flex-col mr-20 py-5 list-none   ${
              menu && "hidden"
            }  `}
          >
            <li className="p-3">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="p-3">
              <Link to="/about">About</Link>
            </li>
            <li className="p-3">
              {" "}
              <Link to="/service">Service</Link>
            </li>
            <li className="p-3">
              {" "}
              <Link to="/login">Login</Link>
            </li>
            <li className="p-3">
              <Link to="/signUp">Sign Up</Link>
            </li>
            <li className="p-3">
              <Link to="/contact">Contact</Link>
            </li>
            <button
              className="w-14 h-8 text-2xl rounded-full bg-white text-black dark:bg-black dark:text-gray-50 m-1"
              onClick={handleLight}
            >
              {bright ? (
                <LightModeIcon className="dark:bg-white dark:text-gray-400 dark:w-14 dark:h-8 dark:rounded-full" />
              ) : (
                <NightlightRoundOutlinedIcon />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
