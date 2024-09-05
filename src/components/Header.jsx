import { useNavigate } from "react-router-dom";
import rocketIcon from "../assets/rocket-icon.svg";

import Navbar from "./Navbar";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-between h-2/3 max-w-6xl mx-auto py-32">
        <div className="space-y-16 w-2/3">
          <div className="space-y-8">
            <h1 className="font-semibold ">
              Accelerate Innovation with Global AI Challenges
            </h1>
            <p className="text-white w-4/6 text-lg">
              AI Challenges at asity simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
          </div>
          <button
            className="bg-white text-lg text-custom-dark font-extrabold rounded-xl px-7 py-3"
            onClick={() => navigate("/hackathon/admin")}
          >
            Create challenge
          </button>
        </div>
        <img src={rocketIcon} alt="header image" className="w-1/3" />
      </section>
    </>
  );
};

export default Header;
