import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:6001/contact", formData);
      setSuccessMessage("Your Message sent successfully!!");
      setShowPopup(true); // Show the popup
      setFormData({ name: "", emailOrPhone: "", message: "" });

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-center">
          Have any questions? Feel free to reach out to us.
        </p>

        {successMessage && showPopup && (
          <div className="fixed top-10 right-10 bg-green-500 text-red px-6 py-3 rounded-lg shadow-lg mt-8">
            {successMessage}
          </div>
        )}

        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email or phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-green rounded-full px-6 text-white flex items-center gap-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;