import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const homeList = [
    {
      photo: "alex.jpg",
      price: "23.birr",
      town: "Adama",
      kebele: "bole",
      type: "sale",
    },
    {
      photo: "home2.jpg",
      price: "2003.birr",
      town: "Addis Ababa",
      kebele: "keliti",
      type: "rent",
    },
    {
      photo: "home5.jpg",
      price: "103.birr",
      town: "Jima",
      kebele: "holata",
      type: "sale",
    },
    // { photo: "home6.jpg", price: "109.birr", town: "Dire dawa", kebele: "bekan" },
    // { photo: "home7.jpg", price: "4473.birr", town: "Adama", kebele: "post" },
    // { photo: "home8.jpg", price: "7634.birr", town: "Addis Ababa", kebele: "bole" },
  ];

  return (
    <div className=" h-screen  ">
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4  mx-10">
        {homeList.map((home, i) => {
          return (
            <Link>
              <div className="  w-full h-screen md:h-4/6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                <img
                  src={home.photo}
                  className="w-full md:w-4/5 md:h-4/5 md:pt-0 pt-32 h-4/5 md:gap-0 object-cover"
                ></img>
                <div className="text-4xl md:text-2xl text-black dark:text-white  mx-3 p-2 ">
                  <h1 className="">
                    {home.town},{""} {home.kebele}{" "}
                  </h1>
                  <h1 className="text-2xl rounded-full">
                    {home.type} {home.price}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
