import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
];

const DateTimeSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedServices, selectedStaff } = location.state || {};
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }
    navigate("/bookingconfirmation", {
      state: { selectedServices, selectedStaff, selectedDate, selectedTime },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-10 gap-10 mt-20 mb-20">
      {/* Left Section - Calendar and Time Slots */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Select Date & Time:</h3>

          <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      minDate={new Date()} // Prevents selection of past dates
                      className="mb-4"
                      tileClassName={({ date, view }) => {
                  if (view === "month") {
                  const today = new Date();
                  const tomorrow = new Date();
                  tomorrow.setDate(today.getDate() + 1);

      if (date < today.setHours(0, 0, 0, 0)) {
        return "text-gray-400"; // Light black (gray) for past dates
      } else if (date.toDateString() === today.toDateString() || date.toDateString() === tomorrow.toDateString()) {
        return "text-black font-bold"; // Black for today and tomorrow
      }
    }
  }}
/>


        <h4 className="text-md font-semibold mt-4">Select Time:</h4>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {timeSlots.map((time, index) => (
            <button
              key={index}
              className={`p-2 border rounded-md cursor-pointer text-sm ${
                selectedTime === time ? "bg-green text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
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
                <div className="flex items-center text-sm text-gray-600">
                  <FaClock className="w-4 h-4 mr-1" /> {service.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CiCreditCard1 className="w-4 h-4 mr-1" /> Rs. {service.price}
                </div>
              </div>
            </li>
          ))}
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
        </ul>
        <div className="mt-4">
          <p className="text-sm font-medium">Selected Date: {selectedDate.toDateString()}</p>
          <p className="text-sm font-medium">Selected Time: {selectedTime || "Not selected"}</p>
        </div>

        <button
          className="bg-green font-semibold btn text-white px-8 py-3 rounded-full w-full mt-5"
          onClick={handleConfirmBooking}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DateTimeSelection;