import main from "../assets/main/main.png";
import Review from "../components/main/StarReview";
import Selections from "../components/main/Selections";
import Social from "../components/main/Social";

const Main = () => {
  return (
    <div className="bg-gray-100">
      <img src={main} className="w-screen h-screen object-cover" />
      <Review />
      <Selections />
      <Social />

      {/* TEST */}
    </div>
  );
};

export default Main;
