import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    category: "Cuts & Styles",
    items: [
      { name: "Buzz Cut", duration: "45 minutes", price: 1200, image: "/images/appointment/services/Buzz Cut.jpg" },
      { name: "High Fade", duration: "45 minutes", price: 1300, image: "/images/appointment/services/high fade.jpg" },
      { name: "Faded Quiff", duration: "1 hour", price: 1500, image: "/images/appointment/services/Faded Quiff.jpg" },
      { name: "Mullet", duration: "45 minutes", price: 1250, image: "/public/images/appointment/services/Mullet Haircut.webp" },
      { name: "Texture Fringe", duration: "45 minutes", price: 1350, image: "/images/appointment/services/Texture Fringe.jpg" },
    ],
  },
  {
    category: "Facial Services",
    items: [
      { name: "Basic Facial", duration: "45 minutes", price: 1600, image: "/images/appointment/services/Basic Facial.webp" },
      { name: "Brightening Facial", duration: "1 hour", price: 1800, image: "/images/appointment/services/Brightening Facial.png" },
      { name: "Vampire Facial", duration: "1 hour 45 minutes", price: 2500, image: "/images/appointment/services/Vampire Facial.jpg" },
      { name: "European Facial", duration: "1 hour 30 minutes", price: 2200, image: "/images/appointment/services/European Facial.png" },
    ],
  },
];

const ServiceSelection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState(
    Object.fromEntries(services.map((service) => [service.category, true])) // Initially expanded
  );
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.name === service.name)
        ? prev.filter((s) => s.name !== service.name)
        : [...prev, service]
    );
  };

  const handleConfirmSelection = () => {
    navigate("/staff-selection", { state: { selectedServices } });
  };

  // Toggle Category Visibility
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10 px-5 overflow-auto">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-5 mt-10">
        <h2 className="text-[20px] font-bold text-black mb-5">Select Service</h2>

        {services.map((service, index) => (
          <div key={index} className="mb-8">
            {/* Category Header */}
            <div
              className="flex justify-between items-center bg-green text-white font-semibold px-4 py-3 cursor-pointer"
              onClick={() => toggleCategory(service.category)}
            >
              <h3>{service.category}</h3>
              {/* Toggle Icon with White Color and Smaller Size */}
              <span className="text-white text-xl font-semibold">
                {expandedCategories[service.category] ? "−" : "+"}
              </span>
            </div>

            {/* Items List (Initially Visible, Hidden Only When Clicking -) */}
            {expandedCategories[service.category] && (
              <ul className="border border-gray-200 rounded-b-lg p-4 space-y-6">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex border rounded-lg cursor-pointer transition-all mb-4 shadow-md ${
                      selectedServices.some((s) => s.name === item.name)
                        ? "bg-blue-300 border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleServiceSelect(item)}
                  >
                    {/* Image Section */}
                    <div className="flex items-stretch h-28 w-28">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Text & Price Section */}
                    <div className="flex flex-1 flex-row gap-8 p-4 items-center justify-between">
                      {/* Name */}
                      <div className="flex flex-col gap-1 justify-center">
                        <p className="text-[18px] font-semibold text-gray-700">{item.name}</p>

                        {/* Duration & Price in One Row */}
                        <div className="flex items-center gap-4">
                          <p className="text-[16px] text-gray-500">{item.duration}</p>

                          {/* Vertical Divider */}
                          <div className="w-px h-[18px] bg-gray-400"></div>

                          {/* Price */}
                          <p className="text-[16px] text-gray-500">Rs {item.price}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <button
          className="bg-green font-semibold btn text-[18px] text-white px-8 py-3 w-full mt-5"
          onClick={handleConfirmSelection}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default ServiceSelection;
