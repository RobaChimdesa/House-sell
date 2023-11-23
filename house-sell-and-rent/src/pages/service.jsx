import React from "react";

function Service() {
  return (
    <div className="flex flex-col h-screen w-full mb-52">
      <h1 className="ml-28 mt-44 text-4xl font-bold">Our Services</h1>

      <div className="grid grid-cols-3 md:grid-cols-1 justify-around ml-7 mr-7">
        <div>
          <div className="mt-10 w-1/2">
            <h1 className="text-2xl font-bold">web developemnt</h1>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur veniam unde, quam quidem dolor quo iusto commodi
              similique dignissimos qui labore ratione adipisci est, nam enim
              velit eum, impedit odio.
            </p>
          </div>
          <div className="mt-10 w-1/2">
            <h1 className="text-2xl font-bold">Network distrubtion</h1>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur veniam unde, quam quidem dolor quo iusto commodi
              similique dignissimos qui labore ratione adipisci est, nam enim
              velit eum, impedit odio.
            </p>
          </div>
        </div>
        <div>
          <div className="mt-10 w-1/2">
            <h1 className="text-2xl font-bold">Web desgin</h1>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur veniam unde, quam quidem dolor quo iusto commodi
              similique dignissimos qui labore ratione adipisci est, nam enim
              velit eum, impedit odio.
            </p>
          </div>
          <div className="mt-10 w-1/2">
            <h1 className="text-2xl font-bold">App developemnt</h1>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur veniam unde, quam quidem dolor quo iusto commodi
              similique dignissimos qui labore ratione adipisci est, nam enim
              velit eum, impedit odio.
            </p>
          </div>
        </div>

        <div>
          <img src="home5.jpg" alt="service.com" className="rounded-2xl h-96" />
        </div>
      </div>
    </div>
  );
}

export default Service;

