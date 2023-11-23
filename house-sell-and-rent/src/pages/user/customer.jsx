import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Customer() {
  const menuitem = [
    { path: "/", name: "Home" },
    { path: "/editProfile", name: "Edit Profile" },
    { path: "/post", name: "Upload File" },
    { path: "/view",arrow:<KeyboardArrowRightIcon/>, name: "View File" },
    { path: "/update", name: "Update File" },
    { path: "/settings", name: "Settings" },
  ];
  const [menu, setMenu] = useState(true);

  const [active, setActive] = useState(0);
  const changeMenu = () => {
    setMenu(false);
  };
  console.log(menu);
  return (
    <div className="h-screen w-full text-white text-xl">
      <div className=" flex justify-between  bg-black p-8">
        <div>
          <div className="bg-black text-white">
            <h1 className="">Home.net</h1>
          </div>
        </div>

        <div>
          <Link>
            <h1>Post home</h1>
          </Link>
        </div>
        <div className=" flex justify-around rounded-2xl bg-white text-black items-center w-1/4 h-8">
            <SearchIcon/>
          <input
            type="serch"
            placeholder="search home "
            className="transparent "
          />
        </div>
        <div>
          <div className="flex">
            <img
              src="home14.jpg "
              onClick={changeMenu}
              className={`rounded-full  w-14 h-14 ${!menu && "mr-36"}`}
            />
            {menu ? (
              <div></div>
            ) : (
              <div
                className="mr-0"
                onClick={() => {
                  setMenu(true);
                }}
              >
            <CloseIcon/>  

              </div>
            )}
          </div>
        </div>
      </div>
      {menuitem.map((item, i) => {
        return (
          <div className=" ml-96 pl-64 ">
            <li
              key={i}
              onClick={() => {
                setActive(i);
              }}
              className={`flex flex-col   ${
                active == i && " underline underline-offset-8"
              } "  bg-black  h-24 w-76 py-3 items-center ml-96 list-none    ${
                menu && "hidden"
              }`}
            >
              <Link path={item.path}> {item.name} {' '} {item.arrow}</Link>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Customer;
