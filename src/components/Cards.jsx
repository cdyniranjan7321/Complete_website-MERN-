/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl relative">
      {/* Heart Icon */}
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHeartFilled ? 'text-rose-500' : 'text-white'
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>

      {/* Item Image */}
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="hover:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>

      {/* Card Body */}
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>Description of the service</p>
        <div className="card-actions justify-between items-center mt-2">
          {/* Price */}
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>{' '}
            {Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(item.price)}
          </h5>

          {/* Star with Number */}
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-300" />
            <span className="font-medium text-gray-6">{item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
