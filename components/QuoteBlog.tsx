import React from "react";

function QuoteBlog() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/quote.jpg')",
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <div className="container py-24 px-5 2xl:px-0 text-center space-y-10">
        <h3 className="text-3xl text-white">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc"
        </h3>
        <p className="text-xl text-white max-w-screen-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          veritatis nemo nihil quasi dolorem esse consequuntur nesciunt dolores
          dolorum sed ut quod quidem, quo tempore assumenda, repellendus dolore
          labore! Fugit.
        </p>
      </div>
    </section>
  );
}

export default QuoteBlog;
