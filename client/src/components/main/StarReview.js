import trophy from "../../assets/main/trophy.png";
import google from "../../assets/main/google.png";
import stars from "../../assets/main/stars.png";
import redlogo from "../../assets/main/red.png";
import fb from "../../assets/main/fb.png";

const Review = () => {
  return (
    <main className="flex mt-14 max-w-[85vw] mx-auto">
      <section className="flex flex-col items-center gap-10 w-[50%]">
        <div className="flex gap-8">
          <div className="flex flex-col justify-center items-center size-40 shadow-sm rounded-xl gap-2 bg-white">
            <img src={trophy} />
            <p className="text-2xl">2018</p>
          </div>
          <div className="flex flex-col justify-center items-center size-40 shadow-sm rounded-xl gap-2 bg-white">
            <img src={trophy} />
            <p className="text-2xl">2019</p>
          </div>
          <div className="flex flex-col justify-center items-center size-40 shadow-sm rounded-xl gap-2 bg-white">
            <img src={trophy} />
            <p className="text-2xl">2020</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center h-40 w-[545px] shadow-sm rounded-xl gap-14 bg-white">
            <img src={google} alt="Google Logo" />
            <div>
              <img src={stars} alt="5 stars" />
              <p className="text-2xl mt-4">1M Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 w-[50%]">
        <div className="flex justify-center items-center h-40 w-[545px] shadow-sm rounded-xl gap-14 bg-white">
          <img src={redlogo} alt="Google Logo" />
          <div>
            <img src={stars} alt="5 stars" />
            <p className="text-2xl mt-4">100 Reviews</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-40 w-[545px] shadow-sm rounded-xl gap-14 bg-white">
          <img src={fb} alt="Google Logo" />
          <div>
            <img src={stars} alt="5 stars" />
            <p className="text-2xl mt-4">100 Reviews</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Review;
