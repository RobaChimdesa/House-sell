import React, { useState } from "react";

function About() {
  const [showmore, setshowmore] = useState(false);

  const handleShowmore = () => {
    setshowmore(!showmore);
  };
  return (
    <div className="h-screen">
      <div className="flex mt-24 w-full md:flex-col md:justify-center justify-around text-4xl md:text-xl">
        <div className="mt-20 w-1/2 md:w-full">
          <h1 className="mb-5  font-semibold">About Us</h1>
          <p className="text-2xl md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            enim possimus quis recusandae nihil cumque animi expedita deleniti
            ratione? Dolorem eaque quaerat molestiae aut quis veritatis, quos in
            commodi labore. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Laborum, dolorem illo adipisci fugit id totam? Soluta quas a,
            fugit praesentium necessitatibus ut cupiditate non suscipit, minima
            nulla modi hic placeat.
          </p>
          <button
            onClick={handleShowmore}
            className="m-5 rounded-full text-xl bg-blue-700 p-2"
          >
            {showmore ? "Hide" : "See"} more
          </button>
          {showmore && (
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              iure voluptates similique. Hic ab nulla doloribus id rem repellat
              corporis sapiente quaerat cupiditate nihil repudiandae sunt,
              perspiciatis vitae, ratione inventore!
            </p>
          )}
        </div>

        <div className="mt-20  ">
          <img
            src="home6.jpg "
            className="h-96 w-96 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
          />
        </div>
      </div>
    </div>
  );
}

export default About;
