import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedServices = [], selectedStaff, selectedDate, selectedTime } = location.state || {};
  

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
    // Check if primary fields are filled
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill out all required fields (Full Name, Email, and Phone).");
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
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-10 gap-10 mt-20 mb-20">
      {/* Left Section - User Details */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
  <h3 className="text-lg font-semibold mb-3">Please fill out the details below</h3>

  {/* Full Name */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Full Name:<span className="text-red">*</span></label>
    <input
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Enter your full name"
      className="w-full p-2 border rounded mt-1"
      required
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Email:<span className="text-red">*</span></label>
    <input
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="w-full p-2 border rounded mt-1"
      required
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Phone:<span className="text-red">*</span></label>
    <input
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter your phone number"
      className="w-full p-2 border rounded mt-1"
      required
    />
  </div>

  {/* Allergies */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Allergies:</label>
    <div className="flex gap-4 mt-1">
      <label className="flex items-center">
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
          className="mr-2"
        />
        Yes
      </label>
      <label className="flex items-center">
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
          className="mr-2"
        />
        No
      </label>
    </div>
  </div>

  {/* Medical Condition */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Medical Condition:</label>
    <div className="flex gap-4 mt-1">
      <label className="flex items-center">
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
          className="mr-2"
        />
        Yes
      </label>
      <label className="flex items-center">
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
          className="mr-2"
        />
        No
      </label>
    </div>
  </div>


  {/* Note */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Note:</label>
    <textarea
      name="note"
      value={formData.note}
      onChange={handleChange}
      placeholder="Enter any additional notes"
      className="w-full p-2 border rounded mt-1"
    />
  </div>
</div>

      {/* Right Section - Booking Summary */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Booking Confirmation</h2>

        {/* Booking Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
          {selectedServices.length > 0 ? (
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index} className="flex flex-col items-start gap-3 p-2 border-b">
                  <div className="w-full flex justify-center">
                    <img src={service.image} alt={service.name} className="w-20 h-20 object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">{service.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="w-4 h-4 mr-1" /> {service.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CiCreditCard1 className="w-4 h-4 mr-1" /> Rs. {service.price}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">No services selected.</p>
          )}
          {selectedStaff && (
            <div className="flex items-center gap-3 p-2 border-b">
              <img
                src={selectedStaff.image}
                alt={selectedStaff.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <p className="font-medium">{selectedStaff.name}</p>
            </div>
          )}
        </div>

        {/* Selected Date and Time */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Selected Date & Time</h3>
          <p className="text-sm font-medium">Date: {selectedDate?.toDateString()}</p>
          <p className="text-sm font-medium">Time: {selectedTime || "Not selected"}</p>
        </div>
        <button
          className="bg-green font-semibold btn text-white px-8 py-3 rounded-full w-full mt-5"
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;