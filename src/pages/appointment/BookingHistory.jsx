import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";


const BookingHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedServices, selectedStaff, selectedDate, selectedTime, formData } = location.state || {};

  const [showPopup, setShowPopup] = useState(true); // State to control the popup visibility

  const handleReschedule = () => {
    // Navigate to the rescheduling page (you can implement this separately)
    navigate("/appointment", { state: location.state });
  };

  
const handleCancel = async () => {
  try {
    // Send cancellation data to the backend
    const response = await fetch("http://localhost:6001/booking/cancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selectedServices,
        selectedStaff,
        selectedDate,
        selectedTime,
        formData,
        status: "Booking Cancelled", // Add a status field to indicate cancellation
      }),
    });

    if (response.ok) {
      console.log("Booking cancellation recorded successfully!");
      // Impement cancellation logic (e.g. , API call cancel the booking )
      alert("Booking Cancelled!");
      navigate("/");
    } else {
      console.error("Failed to record booking cancellation");
      alert("Failed to cancel booking. Please try again.");
    }
  } catch (error) {
    console.error("Error recording booking cancellation:", error);
    alert("An error occurred while canceling the booking. Please try again.");
  }
};



  const handleClosePopup = async () => {
    try {
      // Send booking data to the backend
      const response = await fetch("http://localhost:6001/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedServices,
          selectedStaff,
          selectedDate,
          selectedTime,
          formData,
        }),
      });

      if (response.ok) {
        console.log("Booking data saved successfully!");
      } else {
        console.error("Failed to save booking data");
      }
    } catch (error) {
      console.error("Error saving booking data:", error);
    }

    setShowPopup(false); // Close the popup
  };

  const handleBookAnother = async () => {
    try {
      // Send booking data to the backend
      const response = await fetch("http://localhost:6001/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedServices,
          selectedStaff,
          selectedDate,
          selectedTime,
          formData,
        }),
      });

      if (response.ok) {
        console.log("Booking data saved successfully!");
      } else {
        console.error("Failed to save booking data");
      }
    } catch (error) {
      console.error("Error saving booking data:", error);
    }

    navigate("/appointment"); // Navigate back to the booking page.
  };


  return (
       <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen p-10 gap-10 mt-20 mb-20 relative">
        {/* Overlay to block clicks when popup is open */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

{/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-[500px] h-auto text-center transition-all transform animate-fadeInUp">

                  {/* Centered Icon and Confirmed! Text */}
      <h2 className="text-2xl font-bold mb-4 text-green-600 flex flex-col items-center justify-center gap-2">
        <GrCheckboxSelected className="text-green" />
        Confirmed!
      </h2>

            <p className="text-black mb-4">Thank you for choosing us! Your appointment has been booked successfully.</p>
            <p className="text-black mb-6">
              Booking details will be sent to:{" "}
              <span className="font-semibold text-green">{formData?.email}</span>
            </p>
            <div className="flex flex-col gap-3">
              <button
                className="bg-green font-semibold btn text-white px-8 py-2 rounded-md w-full mt-5"
                onClick={handleClosePopup}
              >
                Great, thanks!
              </button>
              <button
                className="text-green border border-green px-6 py-2 rounded-md hover:bg-green-600 hover:text-red transition"
                onClick={handleBookAnother}
              >
                Book Another
              </button>
            </div>
          </div>
        </div>
      )}



      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">

        {/* Booking Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Booking Details:</h3>
          {selectedServices?.length > 0 ? (
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
              <img src={selectedStaff.image} alt={selectedStaff.name} className="w-16 h-16 object-cover rounded-md" />
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

        {/* User Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">User Details</h3>
          <p className="text-sm font-medium">Name: {formData?.fullName}</p>
          <p className="text-sm font-medium">Email: {formData?.email}</p>
          <p className="text-sm font-medium">Phone: {formData?.phone}</p>
          <p className="text-sm font-medium">Allergies: {formData?.allergies}</p>
          <p className="text-sm font-medium">Medical Condition: {formData?.medicalCondition}</p>
          <p className="text-sm font-medium">Note: {formData?.note}</p>
        </div>

        {/* Address */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Address:</h3>
         <li className="flex items-center space-x-2">
                       <MdLocationOn className="text-[#16A34A]" />
                       <span>Pokhara-10, Lakeside, Street no.14</span>
                     </li>
        </div>

        {/* Reschedule and Cancel Buttons */}

        <div className="flex gap-4 mt-6 justify-center">
            
          <button className="bg-green text-white px-6 py-2 rounded-full" onClick={handleReschedule}>
            Reschedule
          </button>

          <button className="bg-red text-white px-6 py-2 rounded-full" onClick={handleCancel}>
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
