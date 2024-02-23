import Image from "next/image";
import React from "react";

function StaffAbout() {
  const staff__card = [
    {
      id: 1,
      img: "/images/manager-img.jpg",
      role: "Manager",
      name: "John Doe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl.",
    },
    {
      id: 2,
      img: "/images/chef-img.jpg",
      role: "Chef",
      name: "Doe John",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl.",
    },
  ];
  return (
    <section className="bg-lightGreen/20 py-24 px-5 2xl:px-0">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        {staff__card.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden h-[500px]"
          >
            <Image
              src={item.img}
              alt="Image"
              fill={true}
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 px-5 py-5 bg-gradient-to-t via-black from-black to-black/10 text-white">
              <h3 className="text-2xl">{item.role}</h3>
              <h4 className="text-xl">{item.name}</h4>
              <p className="text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StaffAbout;
