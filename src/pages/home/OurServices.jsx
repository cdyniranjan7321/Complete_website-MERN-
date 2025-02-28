import React from "react";


const serviceLists = [
    {id:1, title: "5+ YEARS EXPERIENCE", des: "Expert grooming with precision, style, and care", img: "/images/home/services/icon1.png"},
    {id:2, title: "CUSTOMER SATISFACTION", des: "Committed to excellence, ensuring satisfaction every visit", img: "/images/home/services/icon2.png"},
    {id:3, title: "PREMIUM", des: "Only the finest products for exceptional grooming results.", img: "/images/home/services/icon3.png"},
    {id:4, title: "LOYALTY REWARDS", des: "Earn points with every visit for exclusive perks.", img: "/images/home/services/icon4.png"},
]

const OurServices = () => {


  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-0">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Grooming Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              At THE BARBER, we started with a passion for perfecting
              your look. With skill, precision, and style, we create a
              grooming experience that leaves you confident and
              refreshed.
            </p>

            <button className="bg-green font-semibold btn text-white px-10 py-3 rounded-full">
              Call Us
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                            <img src={service.img} alt="" className=" mx-auto"/>
                            <h5 className="pt-3 font-semibold"> {service.title}</h5>
                            <p className="text-[#90BD95]">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
