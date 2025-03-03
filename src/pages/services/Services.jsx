{/* 
  
  import React, { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    image: null,
    category: "",
    price: "",
    rating: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    if (formData.price < 0) {
      setError("Price cannot be negative.");
      return false;
    }
    if (formData.rating < 1 || formData.rating > 5) {
      setError("Rating must be between 1 and 5.");
      return false;
    }
    setError("");
    return true;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const imageBase64 = await convertToBase64(formData.image);
      const serviceData = { ...formData, image: imageBase64 };

      const response = await fetch("http://localhost:6001/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        const savedService = await response.json();
        setServices((prev) => [...prev, savedService]);
        setFormData({ name: "", service: "", image: null, category: "", price: "", rating: "" });
        setPreviewImage(null);
      } else {
        console.error("Failed to save service.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDelete = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8 mt-12">Manage Services</h1>

        <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Service Name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" required />
            <input type="text" name="service" placeholder="Service Description" value={formData.service} onChange={handleChange} className="input input-bordered w-full" required />
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="input input-bordered w-full" required />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="input input-bordered w-full" min="0" required />
            <input type="number" name="rating" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} className="input input-bordered w-full" min="1" max="5" required />
            <div className="col-span-2">
              <label className="block mb-2">Upload Image</label>
              <input type="file" onChange={handleFileChange} />
              {previewImage && <img src={previewImage} alt="Preview" className="w-32 h-32 object-cover mt-4 rounded-lg" />}
            </div>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          <button type="submit" className="bg-green font-semibold btn text-white px-8 py-3 rounded-full mt-8" disabled={loading}>
            {loading ? "Saving..." : "Save Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services;

*/}



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    category: "Cuts & Styles",
    items: [
      { name: "Buzz Cut", duration: "45 minutes", price: 1200, image: "/images/appointment/services/Buzz Cut.jpg" },
      { name: "High Fade", duration: "45 minutes", price: 1300, image: "/images/appointment/services/high fade.jpg" },
      { name: "Faded Quiff", duration: "1 hour", price: 1500, image: "/images/appointment/services/Faded Quiff.jpg" },
      { name: "Mullet", duration: "45 minutes", price: 1250, image: "/images/appointment/services/Mullet Haircut.webp" },
      { name: "Texture Fringe", duration: "45 minutes", price: 1350, image: "/images/appointment/services/Texture Fringe.jpg" },
    ],
  },
  {
    category: "Facial Services",
    items: [
      { name: "Basic Facial", duration: "45 minutes", price: 1600, image: "/images/appointment/services/Basic Facial.webp" },
      { name: "Brightening Facial", duration: "1 hour", price: 1800, image: "/images/appointment/services/Brightening Facial.png" },
      { name: "Vampire Facial", duration: "1 hour 45 minutes", price: 2500, image: "/images/appointment/services/Vampire Facial.jpg" },
      { name: "European Facial", duration: "1 hour 30 minutes", price: 2200, image: "/images/appointment/services/European Facial.png" },
    ],
  },
];

const ServiceSelection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.name === service.name)
        ? prev.filter((s) => s.name !== service.name)
        : [...prev, service]
    );
  };

  const handleConfirmSelection = () => {
    navigate("/staff-selection", { state: { selectedServices } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10 px-5 overflow-auto">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-5 mt-10">
        <h2 className="text-xl font-bold text-black mb-5">SERVICES AVAILABLE</h2>
        {services.map((service, index) => (
          <div key={index} className="mb-8">
            <h3 className="bg-green text-white px-4 py-2 rounded-t-lg">{service.category}</h3>
            <ul className="border border-gray-200 rounded-b-lg p-4 space-y-6">
              {service.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all mb-4 shadow-md space-x-8 ${
                    selectedServices.some((s) => s.name === item.name)
                      ? "bg-blue-300 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleServiceSelect(item)}
                >
                  <div className="flex items-center gap-6">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-gray-700">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">Rs {item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ServiceSelection;

