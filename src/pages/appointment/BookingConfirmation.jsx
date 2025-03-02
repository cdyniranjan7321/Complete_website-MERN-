import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiClock2, CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlineCalendarMonth, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedServices = [], selectedStaff, selectedDate, selectedTime } = location.state || {};
  

   // Format the selected date
   const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long", // full name of the day (e.g. Monday)
      year: "numeric",
      month: "short", // abbreviated month (e.g. Feb)
      day: "numeric",
    }).format(date);
  };
  const formattedDateTime = selectedTime
    ? `${formatDate(selectedDate)}, ${selectedTime}`
    : formatDate(selectedDate);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    allergies: false,
    medicalCondition: false,
    note: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleConfirm = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }
    alert("Booking Confirmed!");
    navigate("/confirmation-success");
  };
  
  const handleConfirmBooking = () => {
    // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regular expression for phone validation (10-digit numeric)
  const phoneRegex = /^[0-9]{10}$/;

  if (!formData.fullName.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  
    // Check if date and time are selected
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }
    
  // Navigate to Booking History page with booking details
  navigate("/booking-history", {
    state: {
      selectedServices,
      selectedStaff,
      selectedDate,
      selectedTime,
      formData,
    },
  });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-5 md:p-10 gap-10 mt-20 mb-20">
      {/* Left Section - User Details */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
  <h3 className="text-lg font-semibold mb-3">Please fill out the details below</h3>

  {/* Full Name */}
  <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-4">
    <label className="block text-[16px] sm:text-[18px] font-medium text-gray-700 w-1/3">Full Name:<span className="text-red"> *</span></label>
    <input
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Enter your full name"
      className="w-full p-3 sm:p-4 border border-[#D9D9D9] rounded mt-2 md:mt-1 md:ml-[-50px] lg:ml-[-20px] xl:ml-[-50px] 2xl:ml-[-80px] mr-0 2xl:mr-28"
      required
    />
  </div>

  {/* Email */}
  <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-4">
    <label className="block text-[16px] sm:text-[18px] font-medium text-gray-700 w-1/3">Email:<span className="text-red"> *</span></label>
    <input
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="w-full p-3 sm:p-4 border border-[#D9D9D9] rounded mt-2 md:mt-1 md:ml-[-50px] lg:ml-[-20px] xl:ml-[-50px] 2xl:ml-[-80px] 2xl:mr-28"
      required
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-8">
    <label className="block text-[16px] sm:text-[18px] font-medium text-gray-700 w-1/3">Phone:<span className="text-red"> *</span></label>
    <input
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter your phone number"
      className="w-full p-3 sm:p-4 border border-[#D9D9D9] rounded mt-2 md:mt-1 md:ml-[-50px] lg:ml-[-20px] xl:ml-[-50px] 2xl:ml-[-80px] 2xl:mr-28"
      required
    />
  </div>

  <div className="w-full flex flex-col md:flex-col mb-8 gap-6 md:gap-6">
  {/* Allergies */}
  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-[130px]">
    <label className="block text-[16px] sm:text-[18px] font-medium text-gray-700">Allergies:</label>
    <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
      <label className="flex items-center text-[16px]">
        <input
          type="checkbox"
          name="allergies"
          checked={formData.allergies === "yes"}
          onChange={() =>
            setFormData((prevData) => ({
              ...prevData,
              allergies: prevData.allergies === "yes" ? "no" : "yes",
            }))
          }
          className="mr-2 w-4 h-4"
        />
        Yes
      </label>
      <label className="flex items-center text-[16px]">
        <input
          type="checkbox"
          name="allergies"
          checked={formData.allergies === "no"}
          onChange={() =>
            setFormData((prevData) => ({
              ...prevData,
              allergies: prevData.allergies === "no" ? "yes" : "no",
            }))
          }
          className="mr-2 w-4 h-4"
        />
        No
      </label>
    </div>
  </div>

  {/* Medical Condition */}
  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-[50px]">
    <label className="block text-[16px] sm:text-[18px] font-medium text-gray-700">Medical Condition:</label>
    <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
      <label className="flex items-center text-[16px]">
        <input
          type="checkbox"
          name="medicalCondition"
          checked={formData.medicalCondition === "yes"}
          onChange={() =>
            setFormData((prevData) => ({
              ...prevData,
              medicalCondition: prevData.medicalCondition === "yes" ? "no" : "yes",
            }))
          }
          className="mr-2 w-4 h-4"
        />
        Yes
      </label>
      <label className="flex items-center text-[16px]">
        <input
          type="checkbox"
          name="medicalCondition"
          checked={formData.medicalCondition === "no"}
          onChange={() =>
            setFormData((prevData) => ({
              ...prevData,
              medicalCondition: prevData.medicalCondition === "no" ? "yes" : "no",
            }))
          }
          className="mr-2 w-4 h-4"
        />
        No
      </label>
    </div>
  </div>
</div>


  
  


  {/* Note */}
  <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-4">
    <label className="block text-[16px] sm:text-[18px] font-medium text-gray-700 w-1/3">Note:</label>
    <textarea
      name="note"
      value={formData.note}
      onChange={handleChange}
      placeholder="Enter any additional notes"
      className="w-full px-3 pt-3 pb-16 border border-[#D9D9D9] rounded mt-2 md:mt-1 md:ml-[-50px] lg:ml-[-20px] xl:ml-[-50px] 2xl:ml-[-80px] 2xl:mr-28"
    />
  </div>
</div>

      {/* Right Section - Booking Summary */}
      <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-lg">
        {/* <h2 className="text-[24px] font-semibold mb-6 text-center">Booking Confirmation</h2> */}

        {/* Booking Summary */}
        <h3 className="text-[16px] font-regular mb-3 pl-2">Booking Summary</h3>
                <ul>
                  {selectedServices.map((service, index) => (
                    <li key={index} className="flex flex-col items-start gap-3 p-2 border-b">
                      <div className="w-full flex">
                        <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
                      </div>
                      <div className="flex flex-col mt-2 gap-5 w-full">
                        <p className="font-medium text-[18px]">{service.name}</p>
        
                        {/* Duration Section */}
                        <div className="flex items-center text-[16px] text-gray-700">
                          <CiClock2 className="w-5 h-5 mr-3" /> {service.duration}
                        </div>
        
                        {/* Full-width Divider between Duration and Price */}
                        <div className="w-full h-px bg-gray-300 my-0"></div>
        
                        {/* Price Section */}
                        <div className="flex items-center text-[16px] text-gray-700 mb-3">
                          <CiMoneyCheck1 className="w-5 h-5 mr-3" /> Rs. {service.price}
                        </div>
                      </div>
                    </li>
                  ))}
        
                  {selectedStaff && (
                    <div className="flex items-center gap-3 p-2 border-b">
                      <img
                        src={selectedStaff.image}
                        alt={selectedStaff.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                      <p className="font-regular">{selectedStaff.name}</p>
                    </div>
                  )}
                </ul>
        
        
                <div className="flex items-center text-[16px] text-gray-700 mt-3 p-2">
                    <MdOutlineCalendarMonth  className="w-5 h-5 mr-3" />{formattedDateTime}
                </div>
        <button
          className="bg-green font-semibold btn text-[18px] text-white px-8 py-3 w-full mt-5"
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;