import React from "react";

function ContentBlog() {
  return (
    <section className="my-24 px-5 2xl:px-0 space-y-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-lg overflow-hidden border border-darkGreen/40 h-96 w-full">
          <img
            src="/images/meat-img.jpg"
            alt="Meat Image"
            className="hover:scale-105 duration-300 h-full w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden border border-darkGreen/40 h-96">
          <img
            src="/images/powder-img.jpg"
            alt="Powder Image"
            className="hover:scale-105 duration-300 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="container max-w-screen-lg">
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in
          pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient
          orci ac etiam congue mi. Elementum pellentesque non hendrerit et
          pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis
          nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi.
          Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc
          amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus
          purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed
          sit. Mattis quis scelerisque consectetur orci dui est sem nulla.Tortor
          ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet
          id praesent. Malesuada eu sed volutpat, tristique sed laoreet.
          Ultrices purus ac urna diam tincidunt interdum faucibus mauris est.
          Nec, lacinia eleifend amet, quis turpis et massa duis.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque
          ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam
          congue mi.
        </p>
      </div>
    </section>
  );
}

export default ContentBlog;
