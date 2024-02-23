import React from "react";

function Features() {
  const feature__card = [
    {
      id: 1,
      img: "/images/fish.png",
      alt: "Fish Image",
      title: "Premium Quality",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
    {
      id: 2,
      img: "/images/carrots.png",
      alt: "Carrots Image",
      title: "Seasonal Vegetables",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
    {
      id: 3,
      img: "/images/lime.png",
      alt: "Lime Image",
      title: "Fresh Fruit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
  ];
  return (
    <section className="bg-darkGreen/10 px-5 2xl:px-0 py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {feature__card.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 flex flex-col items-center text-center space-y-5 rounded border border-darkGreen/40 group hover:bg-darkGreen duration-300"
            >
              <div className="w-24 h-24 bg-darkGreen/70 p-3 rounded-full group-hover:bg-darkGreen duration-300 border-2 border-darkGreen group-hover:border-white">
                <img src={item.img} alt={item.alt} />
              </div>
              <h3 className="text-2xl text-darkGreen font-medium group-hover:text-white duration-300">
                {item.title}
              </h3>
              <p className="text-lg group-hover:text-white duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
