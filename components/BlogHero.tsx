import React from "react";
import Header from "./Header";
import SectionBlog from "./SectionBlog";

function BlogHero() {
  return (
    <main
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/blog-img.jpg')",
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <Header />
      <SectionBlog />
    </main>
  );
}

export default BlogHero;
