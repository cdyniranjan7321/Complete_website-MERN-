import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiClock2, CiMoneyCheck1 } from "react-icons/ci";

const staffMembers = [
  { id: 1, name: "John Doe", image: "/images/appointment/staffs/staff-1.avif" },
  { id: 2, name: "Jane Smith", image: "/images/appointment/staffs/staff-2.jpeg" },
  { id: 3, name: "Michael Johnson", image: "/images/appointment/staffs/staff-3.jpeg" },
  { id: 4, name: "Ana de Armas", image: "/images/appointment/staffs/staff-4.jpg" },
];



const StaffSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedServices = location.state?.selectedServices || [];
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleStaffSelect = (staff) => {
    setSelectedStaff(staff);
  };

  const handleConfirmStaffSelection = () => {
    if (!selectedStaff) {
      alert("Please select a staff member.");
      return;
    }
    navigate("/appointment/summary", { state: { selectedServices, selectedStaff } });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-10 gap-10 mt-20 mb-20">
      {/* Left Section - Staff Selection */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-[20px] font-semibold mb-6">Who would you like to book with ?</h3>
        <div className="flex flex-col gap-4">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                selectedStaff?.id === staff.id ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
              }`}
              onClick={() => handleStaffSelect(staff)}
            >
              <img src={staff.image} alt={staff.name} className="w-16 h-16 object-cover rounded-md" />
              <p className="ml-4 font-medium text-[18px]">{staff.name}</p>
            </div>
          ))}
        </div>
        <button
          className="bg-green font-semibold btn text-[18px] text-white px-8 py-3 w-full mt-5"
          onClick={handleConfirmStaffSelection}
        >
          Confirm Staff Selection
        </button>
      </div>

      {/* Right Section - Booking Summary */}
      <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-[16px] font-regular mb-3 pl-2">Booking Summary</h3>
        <ul>
          {selectedServices.map((service, index) => (
            <li key={index} className="flex flex-col items-start gap-3 p-2 mb-1">
              <div className="w-full flex">
                <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
              </div>
              <div className="flex flex-col mt-2 gap-4 w-full">
                <p className="font-medium text-[18px]">{service.name}</p>
                
                {/* Duration Section */}
                <div className="flex items-center text-[16px] text-gray-700">
                  <CiClock2 className="w-5 h-5 mr-3" /> {service.duration}
                </div>
                
                {/* Full-width Divider between Duration and Price */}
                <div className="w-full h-px bg-gray-300 my-0"></div>

                {/* Price Section */}
                <div className="flex items-center text-[16px] text-gray-700">
                  <CiMoneyCheck1 className="w-5 h-5 mr-3" /> Rs. {service.price}
                </div>
              </div>
            
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StaffSelection;
