import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-gray-400 md:pb-96 ">
      <div className="flex h-96  text-xl w-full justify-around md:text-xl md:flex-col md:h-screen">
        <div className="mt-10  w-1/4">
          <h1 className="text-2xl rounded-3xl p-2  w-4/6 font-bold italic bg-white text-black">
            Home.net
          </h1>
          <p className="mt-5 line-clamp-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            sapiente earum laboriosam, delectus minus in vel totam ab cupiditate
             dignissimos architecto non. Nobis
            voluptates enim eveniet.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-white ">Useful links</h1>
          <div className="mt-5">
            <li className="list-none my-5 hover:text-white">
              <Link>About Us</Link>
            </li>
            <li className="list-none my-5 hover:text-white">
              <Link>Our Services</Link>
            </li>
            <li className="list-none my-5 hover:text-white">
              <Link>Contact Us</Link>
            </li>
            <li className="list-none my-5 hover:text-white">
              <Link>Blogs Posts</Link>
            </li>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-bold text-white ">Services</h1>
          <div className="mt-5">
            <li className="list-none my-5 hover:text-white">
              <Link>Web Development</Link>
            </li>
            <li className="list-none my-5 hover:text-white">
              <Link>App Development</Link>
            </li>
            <li className="list-none my-5 hover:text-white">
              <Link>Network Installation</Link>
            </li>
            <li className="list-none my-5 hover:text-white">
              <Link>Web Design</Link>
            </li>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-white ">Contact Info</h1>
          <div className="mt-5">
            <li className="list-none my-5">Address: Oromia,Adama</li>
            <li className="list-none my-5 ">
              Email: robachimdesa123@gmail.com
            </li>
            <li className="list-none my-5 hover:text-white">
              phone: +251983626772
            </li>
            <li className="list-none my-5 hover:text-white">
              support: infosupportgmail.com
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
