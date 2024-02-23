import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function RecetPost() {
  const recet__post = [
    {
      id: 1,
      img: "/images/r1.jpg",
      alt: "Image",
      avatar: "/images/man.png",
      name: "John Doe",
      title: "Fruit and vegetables and protection against diseases",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: "/images/r2.jpg",
      alt: "Image",
      avatar: "/images/woman.png",
      name: "Dianne Russell",
      title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <section className="container my-24 px-5 2xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {recet__post.map((item) => (
          <div key={item.id}>
            <div className="h-[550px] overflow-hidden rounded-lg border border-darkGreen/20">
              <img
                src={item.img}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="py-5 space-y-5">
              <div className="flex items-center space-x-4">
                <img
                  src={item.avatar}
                  alt={item.alt}
                  className="w-16 object-contain"
                />
                <h3 className="text-xl">{item.name}</h3>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-medium border-dotted border-b-4 border-b-darkGreen pb-4">
                  {item.title}
                </h2>
                <p className="text-lg">{item.desc}</p>
              </div>

              <div className="flex items-center gap-2">
                <button type="button" className="text-lg">
                  Read More
                </button>
                <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecetPost;
