import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function Category() {
  return (
    <section className="bg-darkGreen/20 px-5 2xl:px-0 py-24">
      <div className="container">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Calories Energy Balance
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="rounded-lg overflow-hidden relative h-96">
            <Image
              src="/images/c1.jpg"
              alt="Image"
              fill={true}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 py-10 px-10 bg-gradient-to-t from-black to-transparent w-full text-white flex items-center gap-5">
              <button type="button" className="text-2xl">
                Starters
              </button>
              <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden relative h-96">
            <Image
              src="/images/c2.jpg"
              alt="Image"
              fill={true}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 py-10 px-10 bg-gradient-to-t from-black to-transparent w-full text-white flex items-center gap-5">
              <button type="button" className="text-2xl">
                Mains
              </button>
              <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden relative h-96">
            <Image
              src="/images/c3.jpg"
              alt="Image"
              fill={true}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 py-10 px-10 bg-gradient-to-t from-black to-transparent w-full text-white flex items-center gap-5">
              <button type="button" className="text-2xl">
                Soups
              </button>
              <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
