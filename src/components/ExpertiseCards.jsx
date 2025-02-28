/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ExpertiseCards = ({ item }) => {
  return (
    <Link to={`/expert/${item._id}`} className="block">
      <div className="relative h-[500px] hover:scale-105 transition-all duration-200 rounded-lg">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[390px] object-cover"
          />
        </figure>
        {/* Overlay with Name & Expertise */}
        <div className="absolute top-[60%] left-[35%] w-[230px] transform -translate-x-1/2 bg-[#C1F1C6] p-3 px-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600 text-base">{item.expert_at}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExpertiseCards;
