import Image from "next/image";
import React from "react";

function AddressContact() {
  return (
    <section className="container my-24 px-5 2xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5 text-darkGreen">
          <h2 className="text-3xl border-b border-white inline">
            Get in touch!
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            soluta quis quaerat dolor animi, ut ducimus! Eaque nisi accusantium
            provident quisquam, laudantium facilis eligendi iure earum id
            expedita, molestiae maiores.
          </p>
          <div>
            <p className="text-xl">+91 12345 67890</p>
            <span className="text-xl">example@gmail.com</span>
          </div>

          <address className="text-2xl">Andhra Pradesh, IND</address>
        </div>

        <div className="rounded overflow-hidden h-96 w-full relative">
          <Image
            src="/images/address-img.jpg"
            alt="Address Image"
            fill={true}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default AddressContact;
