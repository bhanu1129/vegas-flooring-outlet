import product from "../assets/product/product.png";
import Services from "../components/product/Services";
import Showcase from "../components/product/Showcase";

const Product = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${product})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            A WIDE RANGE OF{" "}
            <span className="font-normal">FLOORING SERVICES</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <Services />
      <Showcase />
    </main>
  );
};

export default Product;
