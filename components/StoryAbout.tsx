import React from "react";

function StoryAbout() {
  return (
    <section className="container my-24 px-5 2xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="space-y-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Out Story</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit
          ad corrupti molestiae doloribus incidunt perferendis, iste explicabo
          porro sint nulla sit saepe, ut illo repellat impedit, a corporis
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit
          ad corrupti molestiae doloribus incidunt perferendis, iste explicabo
          porro sint nulla sit saepe.
        </p>

        <p className="text-lg">
          Laudantium? Molestiae, dolorum eos eaque numquam officiis, itaque fuga
          quasi reiciendis quis assumenda quia, libero voluptates. Voluptatum
          qui consequatur optio quo.
        </p>
      </div>

      <div className="h-96 w-full rounded overflow-hidden border border-darkGreen/20">
        <img
          src="./images/about-chef.jpg"
          alt="About Chef Image"
          className="h-full w-full object-cover hover:scale-105 duration-300"
        />
      </div>
    </section>
  );
}

export default StoryAbout;
