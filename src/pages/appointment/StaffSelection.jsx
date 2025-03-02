import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiClock2, CiMoneyCheck1 } from "react-icons/ci";

const staffMembers = [
  { id: 1, name: "John Doe", image: "staff1.jpg" },
  { id: 2, name: "Jane Smith", image: "staff2.jpg" },
  { id: 3, name: "Michael Johnson", image: "staff3.jpg" },
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
        <h3 className="text-lg font-semibold mb-3">Who would you like to book with ?</h3>
        <div className="flex flex-col gap-4">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                selectedStaff?.id === staff.id ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
              }`}
              onClick={() => handleStaffSelect(staff)}
            >
              <img src={staff.image} alt={staff.name} className="w-20 h-20 object-cover rounded-md" />
              <p className="ml-4 font-medium">{staff.name}</p>
            </div>
          ))}
        </div>
        <button
         className="bg-green font-semibold btn text-white px-8 py-3 rounded-full w-full mt-5"
          onClick={handleConfirmStaffSelection}
        >
          Confirm Staff Selection
        </button>
      </div>

      {/* Right Section - Booking Summary */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Booking Summary</h3>
        <ul>
          {selectedServices.map((service, index) => (
            <li key={index} className="flex flex-col items-start gap-3 p-2 border-b">
              <div className="w-full flex justify-center">
                <img src={service.image} alt={service.name} className="w-20 h-20 object-cover" />
              </div>
              <div className="flex flex-col">
                <p className="font-medium">{service.name}</p>
                <div className="flex items-center text-sm text-gray-700">
                  <CiClock2 className="w-4 h-4 mr-1" /> {service.duration}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CiMoneyCheck1 className="w-4 h-4 mr-1" /> Rs. {service.price}
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
