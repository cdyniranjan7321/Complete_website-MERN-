import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    category: "Cuts & Styles",
    items: [
      { name: "Buzz Cut", duration: "45 minutes", price: 1200, image: "/images/appointment/services/Buzz Cut.jpg" },
      { name: "High Fade", duration: "45 minutes", price: 1300, image: "/images/appointment/services/high fade.jpg" },
      { name: "Faded Quiff", duration: "1 hour", price: 1500, image: "/images/appointment/services/Faded Quiff.jpg" },
      { name: "Mullet", duration: "45 minutes", price: 1250, image: "/images/appointment/services/Mullet Haircut.webp" },
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

  return (
    <div className="flex justify-center items-center min-h-screen py-10 px-5 overflow-auto">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-5 mt-10">
        <h2 className="text-xl font-bold text-black mb-5">SERVICES AVAILABLE</h2>
        {services.map((service, index) => (
          <div key={index} className="mb-8">
            <h3 className="bg-green text-white px-4 py-2 rounded-t-lg">{service.category}</h3>
            <ul className="border border-gray-200 rounded-b-lg p-4 space-y-6">
              {service.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all mb-4 shadow-md space-x-8 ${
                    selectedServices.some((s) => s.name === item.name)
                      ? "bg-blue-300 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleServiceSelect(item)}
                >
                  <div className="flex items-center gap-6">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-gray-700">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">Rs {item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ServiceSelection;

