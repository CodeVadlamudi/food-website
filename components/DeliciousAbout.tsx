import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function DeliciousAbout() {
  return (
    <section className="px-5 2xl:px-0 my-24">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/taste.jpg')",
        }}
        className="bg-center bg-no-repeat bg-covercontainer container rounded px-5"
      >
        <div className="py-24 max-w-screen-md text-center mx-auto text-white space-y-5">
          <h1 className="text-5xl ">It looks delicious</h1>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            cupiditate ex cum animi possimus ullam facere voluptatem aperiam
            doloremque dolorum, laudantium tenetur accusantium totam dolorem
            nisi reiciendis? Placeat, nihil assumenda?
          </p>
          <PlayCircleIcon className="w-32 h-32 mx-auto" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default DeliciousAbout;
