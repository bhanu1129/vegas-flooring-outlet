import reviewpage from "../assets/reviewspage/reviewpage.png";
import review1 from "../assets/reviewspage/review1.png";
import userreview from "../assets/reviewspage/userreview.png";
import StarReview from "../components/main/StarReview";
import best from "../assets/best.png";
import stars from "../assets/main/stars.png";
import Social from "../components/main/Social";

const ReviewsPage = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${reviewpage})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            VOTED BEST OF <span className="font-normal">LAS VEGAS</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <StarReview /> {/* This is the same from main page's components */}
      <section className="relative">
        <div
          className="absolute opacity-20 bg-gradient-to-tr from-green-500 to-transparent size-44 rounded-3xl z-0 
        right-10 bottom-60 rotate-45"
        ></div>
        <div className="flex flex-col justify-center items-center gap-16 mt-28 mb-32">
          <h2 className="text-5xl font-bold">REVIEWS</h2>
          <div className="flex gap-16">
            <img src={best} alt="The Best" className="rounded-lg" />
            <img src={best} alt="The Best" className="rounded-lg" />
          </div>
        </div>

        <div className="relative flex max-w-[81vw] mx-auto">
          <div className="bg-white rounded-l-3xl">
            <img src={review1} alt="review" />
          </div>

          <div className="bg-white flex-1 rounded-r-3xl flex flex-col justify-center items-center gap-3">
            <img
              src={userreview}
              alt="User Profile"
              className="max-w-[111px]"
            />
            <span className="font-light">Alia Norway</span>
            <img src={stars} alt="5 stars" className="max-w-[111px]" />
            <p className="max-w-[411px] text-center capitalize font-light">
              Vinyl flooring is relatively easy to care for. You have to make
              sure that grit and dirt are kept swept free to maintain the
              surface of the floor. Then, you can use a damp mop and an approved
              vinyl floor cleaner to remove stains.
            </p>
          </div>
        </div>
      </section>
      <Social />
    </main>
  );
};

export default ReviewsPage;
