import React from "react";

function Menu() {
  const menu__card = [
    {
      id: 1,
      title: "Deep Sea Snow White Cod Fillet",
      coin: "200",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      title: "Steak With Rosemary Butter",
      coin: "140",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Natural Wine Pairing",
      coin: "240",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      title: "Cucumber Salad",
      coin: "280",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      title: "Steak With Rosemary Butter",
      coin: "220",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section className="container px-5 xl:px-0 my-24 space-y-10">
      <h2 className="text-4xl">Our Menu</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {menu__card.map((item) => (
          <div key={item.id} className="space-y-5">
            <div className="flex items-center justify-between border-b-2 pb-2 border-dotted border-darkGreen">
              <h3 className="text-xl md:text-2xl">{item.title}</h3>
              <span className="text-2xl">{item.coin}</span>
            </div>
            <p className="text-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
