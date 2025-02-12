import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';


const Footer = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon === selectedIcon ? null : icon);
  };


  const iconClass = (icon) =>
    `cursor-pointer transition-colors duration-300 ${
      selectedIcon === icon ? 'text-[#16A34A]' : 'text-white'
    } hover:text-[#16A34A]`;

  return (
    <footer className="bg-[#C8F5CC] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo & Description */}
        <div>
          <button className="flex items-center space-x-2 mb-4 text-white px-4 py-3 rounded-lg">
            <img src="/logo.jpg" alt="" className="w-20 h-16" />
            <span className="text-lg font-bold"></span>
          </button>
          <p className="text-[#4B5563]">Experience the craft where every cut is a masterpiece of style and precision.</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className={iconClass('facebook')} onClick={() => handleIconClick('facebook')} />
            <FaTwitter className={iconClass('twitter')} onClick={() => handleIconClick('twitter')} />
            <FaInstagram className={iconClass('instagram')} onClick={() => handleIconClick('instagram')} />
            <FaYoutube className={iconClass('youtube')} onClick={() => handleIconClick('youtube')} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#4B5563]">Quick links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-[#4B5563] hover:text-[#16A34A]">Home</a></li>
            <li><a href="#services" className="text-[#4B5563] hover:text-[#16A34A]">Services</a></li>
            <li><a href="#appointments" className="text-[#4B5563] hover:text-[#16A34A]">Appointments</a></li>
            <li><a href="#about" className="text-[#4B5563] hover:text-[#16A34A]">About us</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#4B5563]">Contact Us</h4>
          <ul className="space-y-2 text-[#4B5563]">
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-[#16A34A]" />
              <span>Pokhara-10, Lakeside, Street no.14</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineMail className="text-[#16A34A]" />
              <span>thebarber@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlinePhone className="text-[#16A34A]" />
              <span>+977-9812345678</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-10 pt-6 text-center">
        <p className="text-[#4B5563]">Copyright © 2025 Calenify | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
