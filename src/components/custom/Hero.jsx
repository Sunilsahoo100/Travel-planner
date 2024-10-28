import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex-col items-center mx-56 gap-9 relative">
      <h1 className="font-extrabold text-[58px] text-center mt-16 ">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:{" "}
        </span>
        personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center mt-5">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <img src="./front.png" className="mt-7 rounded-3xl w-auto h-screen fade-edges" />
      <Link to={"/create-trip"} className="text-current">
      <button className="bg-gray-600 mt-9 ml-auto block">Get Started, It's Free</button>
      </Link>
      
    </div>
  );
}

export default Hero;
