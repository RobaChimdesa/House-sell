import React from "react";

import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

export default function Login() {
  const [action, setaction] = useState("Login");
  return (
    <div className="h-screen  ">
      <div className="flex flex-col h-4/5 m-28  mt-20 items-center  ">
        <div className=" text-4xl underline mt-36 mb-16 font-bold text-blue-700 flex flex-col ">
          <div className="text">{action}</div>
        </div>
        <div className="flex flex-col  mt-13 gap-7 ">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="w-96  border-10 h-20 bg-white dark:text-2xl dark:text-white dark:bg-slate-700  items-center ">
              <span className="ml-3 dark:text-2xl">
                {" "}
                <PersonIcon />{" "}
              </span>
              <input
                placeholder="Name"
                type="text"
                className="p-2 m-4  bg-transparent outline-none  "
              />
            </div>
          )}

          <div className="w-96  border-10 h-20 bg-white dark:text-2xl dark:text-white dark:bg-slate-700  items-center ">
            <span className="ml-3 dark:text-2xl">
              {" "}
              <EmailIcon />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="p-2 m-4  bg-transparent outline-none"
            />
          </div>
          <div className="w-96  border-10 h-20 bg-white dark:text-2xl dark:text-white dark:bg-slate-700  items-center ">
            <span className="ml-3 dark:text-2xl">
              <LockIcon />
            </span>
            <input
              type="password"
              placeholder="password"
              className="p-2 m-4  bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="mt-10 flex gap-14 md:flex-col md:gap-10 ">
          <div
            className={`${
              action === "Login"
                ? "flex rounded-full bg-blue-700 w-52 h-12 justify-center items-center"
                : "flex justify-center items-center bg-white dark:bg-slate-700 w-52 h-12 rounded-full"
            }`}
            onClick={() => {
              setaction("Login");
            }}
          >
            <Link>Log in</Link>
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <span className="mt-3">Don't have an account?</span>
          )}
          <div
            className={`${
              action === "Sign Up"
                ? "flex rounded-full bg-blue-700 w-52 h-12 justify-center items-center"
                : ""
            }`}
            onClick={() => {
              setaction("Sign Up");
            }}
          >
            {action === "Sign Up" ? (
              <Link>Sign Up</Link>
            ) : (
              <Link className="">
                {" "}
                <span className="underline">Register Here</span>{" "}
                <span className="text-blue-700 ">Sign Up</span>
              </Link>
            )}
          </div>
        </div>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="mt-8 pl-3.5 text-xl">
            forget Password?{" "}
            <span>
              Click <Link className="text-blue-700 "> Here!</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
