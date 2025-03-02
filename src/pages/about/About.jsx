import React from "react";
import { FaStar } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="section-container mt-12"> {/* Added mt-12 to give space from navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 mt-12">
          <img 
            src="/images/home/testimonials/testimonials.jpg" 
            alt="About us"
            className="max-w-full h-auto"  // Ensures the image scales correctly
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">About us</p>
            <h2 className="title">What Our Customers Say</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              “Visiting THE BARBER was an exceptional experience!
              The precision, attention to detail, and top-notch
              service left me feeling confident and refreshed.”
            </blockquote>

            {/* Avatar */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> 
                  <span className="font-medium">4.9</span> 
                  <span className="text-[#807E7E]">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
