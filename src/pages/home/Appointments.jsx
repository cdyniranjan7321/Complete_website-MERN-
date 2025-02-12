import React from "react";
import appointmentImg from "/images/home/appointment.png";

const Appointments = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="relative md:w-1/2 top-[-190px] left-[-80px]">
          {/* Image */}
          <img
            src={appointmentImg}
            alt="Appointment"
            className="w-[600px] h-[1000px] object-cover"
          />

          {/* Overlayed Sections */}
          <div className="absolute top-[70.3%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-[7px_12px_43px_0_#00000023] rounded-[30px] w-[260px] h-[112px] text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200 flex flex-col justify-center">
            <h5 className="text-[20px] font-bold">SUN - FRI</h5>
            <p className="text-[16px] text-[#90BD95] font-semibold">8AM - 10PM</p>
          </div>

          <div className="absolute top-[84%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-[7px_12px_43px_0_#00000023] rounded-[30px] w-[260px] h-[112px] text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200 flex flex-col justify-center">
            <h5 className="text-[20px] font-bold">SAT</h5>
            <p className="text-[16px] text-[#90BD95] font-semibold">Closed</p>
          </div>
        </div>

        <div className="md:w-[55%]">
          <div className="text-left md:w-5/5 space-y-10">
            <p className="subtitle !font-bold">Opening hours</p>
            <h2 className="title">Book Your Appointment, Skip the Wait</h2>
            <p className="my-5 text-[16px] text-secondary leading-[30px]">
              With our easy online booking system, you can choose your preferred time and barber, ensuring a seamless, appointment-only experience. No more waiting in line—just arrive, relax, and enjoy top-notch service!
            </p>
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
