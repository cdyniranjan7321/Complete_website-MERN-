import React, { useState } from 'react';

const AppointmentPage = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [period, setPeriod] = useState('AM');
  const [services, setServices] = useState([]);
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const serviceOptions = [
    { name: 'Haircut', description: 'A stylish haircut to freshen up your look.' },
    { name: 'Beard Trim', description: 'Trim and shape your beard to perfection.' },
    { name: 'Shave', description: 'A classic shave for a smooth finish.' },
    { name: 'Haircut & Beard Trim', description: 'Get both a fresh haircut and beard trim.' },
    { name: 'Hair Care', description: 'Get perfect hair caring.' },
    { name: 'Facial Services', description: 'Experience skin perfection and reveal your true beauty potential.' },
    { name: 'Hair Tattoo', description: 'Transform your look using a stylish hair tattoo.' },
  ];


  
  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setServices([...services, name]);
    } else {
      setServices(services.filter((service) => service !== name));
    }
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Assumes phone number is 10 digits
    return phoneRegex.test(phone);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation logic here (check if phone/email, etc. are valid)
    if (!isValidPhoneNumber(contact) && !isValidEmail(contact)) {
      setError('Please enter a valid phone number or email.');
      return;
    }
    setError('');
  
    const formattedTime = `${hour}:${minute} ${period}`;
    const appointmentData = {
      name: name,
      contact: contact,
      date: date,
      time: formattedTime,
      services: services,
    };
  
    try {
      // Make POST request to store appointment data in database
      const response = await fetch('http://localhost:6001/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      if (response.ok) {
        const result = await response.json();
        setConfirmation(`Appointment confirmed for ${name} on ${date} at ${formattedTime} for ${services.join(', ')} service(s).`);
        setShowModal(true);
      } else {
        setError('Failed to book appointment');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong!');
    }
  };

  


  const closeModal = () => {
    setShowModal(false);
    setConfirmation('');
    
    // Reset form fields
    setName('');
    setContact('');
    setDate('');
    setHour('');
    setMinute('');
    setPeriod('AM');
    setServices([]);
  };

  

  return (
    <div className="min-h-screen flex flex-col justify-between mt-12">
      <div className="flex-grow flex justify-center items-center py-12">
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Book Your Barber Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number or Email</label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Enter your email or phone number"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Appointment Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Time</label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  id="hour"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  min="1"
                  max="12"
                  className="w-16 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <span className="text-gray-700">:</span>
                <input
                  type="number"
                  id="minute"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  min="00"
                  max="59"
                  className="w-16 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  id="period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Select Services</label>
              <div className="grid grid-cols-2 gap-4">
                {serviceOptions.map((serviceOption, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={serviceOption.name}
                      name={serviceOption.name}
                      checked={services.includes(serviceOption.name)}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    <label htmlFor={serviceOption.name} className="cursor-pointer">
                      <h3 className="font-semibold">{serviceOption.name}</h3>
                      <p className="text-sm text-gray-500">{serviceOption.description}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green font-semibold btn text-white px-8 py-3 rounded-full mt-8"
            >
              Book Appointment
            </button>
          </form>

          {error && (
            <p className="mt-6 text-red-600 text-center font-medium">{error}</p>
          )}

          {confirmation && showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Appointment Confirmed</h2>
                <p>{confirmation}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-green text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;