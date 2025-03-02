import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiClock2, CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlineCalendarMonth, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
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

  // Format the selected date
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long", // full name of the day (e.g. Monday)
      year: "numeric",
      month: "short", // abbreviated month (e.g. Feb)
      day: "numeric",
    }).format(date);
  };

  // Combine the formatted date with the selected time
  const formattedDateTime = selectedTime
    ? `${formatDate(selectedDate)}, ${selectedTime}`
    : formatDate(selectedDate);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-5 md:p-10 gap-10 mt-20 mb-20">
      {/* Left Section - Calendar and Time Slots */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Select Date & Time</h3>

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


        <h4 className="text-md font-semibold mt-4">Select Time</h4>
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
      <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-lg">
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
          className="bg-green font-semibold btn text-white text-[18px] px-8 py-3 w-full mt-5"
          onClick={handleConfirmBooking}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DateTimeSelection;
