/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaHeart} from "react-icons/fa"

const Cards = ({item}) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);

    }


  return (
        <div className="card w-96 bg-base-100 shadow-xl relative">

            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFilled ? 
            "text-rose-500" : "text-white"} `}
            onClick={handleHeartClick}
            >
                <FaHeart className="h-5 w-5 cursor-pointer"/>

            </div>
    <Link to={`/menu/${item._id}` }>
    <figure>
    <img
      src={item.image}
      alt=""
      className="hover:scale-105 transition-all duration-200 md:h-72"
       />
  </figure>  
    </Link>

  <div className="card-body">
<Link to={`/menu/${item._id}`}>
{" "}

<h2 className="card-title">{item.name}</h2>
</Link>
    
    <p>Description of the service</p>
    <div className="card-actions justify-between items-center mt-2">
    <h5 className="font-semibold">
  <span className="text-sm text-red">$</span> {Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(item.price)}</h5>

      <button className="btn bg-green text-white">Add Now</button>
    </div>
  </div>
</div>
  )
}

export default Cards
