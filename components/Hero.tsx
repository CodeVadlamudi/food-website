import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="bg-darkGreen py-24 px-5 2xl:px-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
          <div className="rounded-lg overflow-hidden border border-white/20 h-[550px] relative">
            <Image
              src="/images/hero.jpg"
              alt="Hero Image"
              fill={true}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white space-y-6 xl:space-y-10 relative">
            <h2 className="text-3xl md:text-5xl">
              Healthy Eating is important part of lifestyle!
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              excepturi voluptate impedit cum praesentium tempora numquam. Magni
              quia pariatur error officiis veniam quas adipisci tempore sint vel
              optio, qui ad.
            </p>

            <div className="grid grid-cols-2 gap-5 lg:absolute bottom-0 inset-x-0">
              <div className="h-60 rounded-lg overflow-hidden border border-white/20 relative">
                <Image
                  src="/images/hero2.jpg"
                  alt="Image"
                  fill={true}
                  className="h-full w-full object-cover hover:scale-105 duration-300"
                />
              </div>
              <div className="h-60 rounded-lg overflow-hidden border border-white/20 relative">
                <Image
                  src="/images/hero3.jpg"
                  alt="Image"
                  fill={true}
                  className="h-full w-full object-cover hover:scale-105 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
