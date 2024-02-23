import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <section className="my-24 px-5 2xl:px-0">
      <div className="container space-y-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Our Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 border p-5 rounded border-darkGreen/40">
            <h3 className="text-2xl md:text-3xl">
              &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla, natus &quot;
            </h3>

            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/man.png"
                  alt="Avatar Image"
                  fill={true}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl">John Doe</h3>
                <span>Chef</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-5 border border-darkGreen/40 rounded">
            <h3 className="text-2xl md:text-3xl">
              &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla, natus &quot;
            </h3>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/woman.png"
                  alt="Woman Image"
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl">John Doe</h3>
                <span>Chef</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
