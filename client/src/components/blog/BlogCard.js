import React from "react";

const BlogCard = ({ img }) => {
  return (
    <section className="max-w-[752px] bg-white">
      <div>
        <img src={img} alt="blog" />
      </div>
      <div className="flex flex-col gap-4 p-12">
        <span className="text-2xl text-stone-500">INTERIOR DESIGN</span>
        <h2 className="text-5xl font-bold">Best Flooring For Modern Kitchen</h2>
        <p className="text-stone-500 leading-8">
          There are various amazing flooring types in the market right now.
          While most of them look dazzling, it also has to be functional. That’s
          why it is important to know when to choose SPC Vinyl for your Las
          Vegas flooring. SPC (Stone Plastic Composite or Stone Polymer
          Composite) is also known as Rigid Core Luxury Vinyl. SPC is one of the
          most indestructible type of flooring option available. Apart from
          being completely rigid due to its various layers...
        </p>
        <span className="font-bold cursor-pointer">Read More</span>
      </div>
    </section>
  );
};

export default BlogCard;
