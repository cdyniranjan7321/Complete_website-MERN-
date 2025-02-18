import React from 'react';
import { useNavigate } from "react-router-dom";
import bannerImg from "/images/home/banner.png";

const Banner = () => {
   const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* Right side===img */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
              </div>
              </div>

        {/* Left side==texts */}
        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive Into Dapper, Define Your <span className="text-green">Style!</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Every Trim, and Style Tells a Story of Mastery and Timeless
            Craftsmanship.
          </p>
          <button
          onClick={() => navigate("/appointment")}
           className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
            Book Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;