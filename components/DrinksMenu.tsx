import React from "react";

function DrinksMenu() {
  return (
    <section className="container my-24 px-5 space-y-10 text-darkGreen">
      <div className="text-center space-y-5 max-w-screen-md mx-auto">
        <h2 className="text-5xl">Starters</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet
          perferendis animi, dolorem nemo necessitatibus omnis nam molestiae,
          ratione provident.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="h-96 md:h-[600px] w-full rounded overflow-hidden">
          <img
            src="/images/starter-img.jpg"
            alt="Starter Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <div className="space-y-4">
            <h3 className="text-3xl border-b-4 border-dotted border-darkGreen pb-2 text-right">
              200
            </h3>
            <h2 className="text-4xl">Grilled Okra and Tomatoes</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              veniam nam vero voluptas nostrum dolorum.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-3xl border-b-4 border-dotted border-darkGreen pb-2 text-right">
              200
            </h3>
            <h2 className="text-4xl"> Basil Pancakes</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              veniam nam vero voluptas nostrum dolorum.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-3xl border-b-4 border-dotted border-darkGreen pb-2 text-right">
              200
            </h3>
            <h2 className="text-4xl">Cucumber Salad</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              veniam nam vero voluptas nostrum dolorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrinksMenu;
