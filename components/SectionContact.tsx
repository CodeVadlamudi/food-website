import React from "react";

function SectionContact() {
  return (
    <section className="container py-24 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-5">
          <h1 className="text-6xl md:text-7xl lg:text- text-white">
            Get in Touch!
          </h1>
          <p className="text-white text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam fuga
            odit pariatur quo recusandae, eos accusamus deserunt distinctio
            fugiat sed error. Fugit assumenda eaque nostrum perferendis cumque
            recusandae iste corporis.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-2xl border-b-2 border-white border-dotted text-white inline-block">
            Open time - Monday - Friday
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
            <div className="text-white">
              <h3 className="text-xl">Breakfast</h3>
              <span className="text-xl">10:00 - 12:30</span>
            </div>
            <div className="text-white">
              <h3 className="text-xl">Lunch</h3>
              <span className="text-xl">12:30 - 15:45</span>
            </div>
            <div className="text-white">
              <h3 className="text-xl">Dinner</h3>
              <span className="text-xl">19:00 - 22:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
