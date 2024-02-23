import React from "react";

function Form() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(35, 48, 0, 0.5), rgba(35, 48, 0, 0.7)), url('/images/form-img.jpg')",
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <form className="py-24 px-5 2xl:px-0 container grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="First Name"
          className="h-14 px-4 placeholder:text-lg text-xl placeholder:text-white text-white border border-white focus:outline-none focus:ring focus:border-lightGreen focus:ring-lightGreen bg-transparent rounded"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="h-14 px-4 placeholder:text-lg text-xl placeholder:text-white text-white border border-white focus:outline-none focus:ring focus:border-lightGreen focus:ring-lightGreen bg-transparent rounded"
        />

        <input
          type="text"
          placeholder="Full Name"
          className="h-14 px-4 placeholder:text-lg text-xl placeholder:text-white text-white border border-white focus:outline-none focus:ring focus:border-lightGreen focus:ring-lightGreen bg-transparent rounded"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="h-14 px-4 placeholder:text-lg text-xl placeholder:text-white text-white border border-white focus:outline-none focus:ring focus:border-lightGreen focus:ring-lightGreen bg-transparent rounded"
        />

        <input
          type="tel"
          placeholder="Phone"
          className="h-14 px-4 placeholder:text-lg text-xl placeholder:text-white text-white border border-white focus:outline-none focus:ring focus:border-lightGreen focus:ring-lightGreen bg-transparent rounded"
        />

        <input
          type="date"
          placeholder="Date"
          className="h-14 px-4 placeholder:text-lg text-xl placeholder:text-white text-white border border-white focus:outline-none focus:ring focus:border-lightGreen focus:ring-lightGreen bg-transparent rounded"
        />

        <input
          type="submit"
          value="Book Now"
          className="h-14 px-4 text-white rounded text-xl bg-lightGreen hover:bg-white hover:text-black duration-300"
        />
      </form>
    </section>
  );
}

export default Form;
