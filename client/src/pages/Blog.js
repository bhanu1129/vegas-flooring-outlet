import blog from "../assets/blog/blog.png";
import BlogCard from "../components/blog/BlogCard";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import SearchCard from "../components/blog/SearchCard";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${blog})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">BLOG / FLOORING BLOG</h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>

      <section className="relative flex justify-center gap-4 my-36">
        <div
          className="absolute opacity-20 bg-gradient-to-b from-green-500 via-green-400 to-transparent size-40 rounded-3xl z-0 
        right-20 top-64 rotate-45"
        ></div>

        <div
          className="absolute opacity-20 bg-gradient-to-l from-green-500 to-transparent size-96 rounded-full z-0
        bottom-[15%] right-[27%]"
        ></div>

        <div className="relative flex flex-col gap-20">
          <BlogCard img={blog1} />
          <BlogCard img={blog2} />
          <BlogCard img={blog3} />
          <ul className="flex items-center gap-10 ml-5 text-stone-500">
            <FaArrowLeft className="cursor-pointer" />
            <li className="cursor-pointer">1</li>
            <li className="cursor-pointer">2</li>
            <li className="cursor-pointer">3</li>
            <li className="cursor-pointer">4</li>
            <li className="cursor-pointer">5</li>
            <li className="cursor-pointer">6</li>
            <FaArrowRight className="cursor-pointer" />
          </ul>
        </div>

        <div className="relative">
          <SearchCard />
          <div className="bg-white mt-5 p-5">
            <h3 className="text-2xl">Recent Posts</h3>
            <hr className="my-4" />
            <div className="flex flex-col gap-4">
              <RecentPost img={blog1} />
              <RecentPost img={blog2} />
              <RecentPost img={blog3} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const RecentPost = ({ img }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src={img} className="size-24 object-cover" />
      <div>
        <h4 className="text-lg max-w-[250px]">
          Best Flooring For Modern Kitchen
        </h4>
        <span className="text-gray-600">February 16, 2022</span>
      </div>
    </div>
  );
};

export default Blog;
