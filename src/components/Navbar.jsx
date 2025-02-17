import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  
    //handle scroll functions
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


     const navItems = (
       <>
     <li>
      
      <a href="/">Home</a>
      </li>

      <li>
        <Link to ="/services">Services</Link>
      </li>
      {/*<li tabIndex={0}> */}
        {/*  <details> */}


          {/*<a>Services</a> */}

         {/* <ul className="p-2">
            <li><a>Online Order</a></li>
            <li><a>Seat Booking</a></li>
            <li><a>Service Tracking</a></li>
          </ul>*/}


       {/* </details>*/} 
      {/*</li>*/}
      <li>
        <Link to ="/appointment">Appointment
        </Link>
        
        </li>
      <li><Link to="/about">About us</Link></li>
     </>
     );

  return (
    <header
    className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
  >
    <div
      className={`navbar xl:px-24 ${
        isSticky
          ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
          : ""
      }`}
    >
 
  <div className="navbar-start">
    <div className="dropdown justify-between">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <img src="/logo.jpg" alt="" className="w-20 h-16" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">

      
          

    {/* btn */}
    <Link to="/contact" className="btn bg-green rounded-full px-6 text-white flex items-center gap-2">
            <BiPhoneCall /> Contact
          </Link>
  </div>
</div>
    </header>
  );
};

export default Navbar;