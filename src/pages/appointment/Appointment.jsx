import React, { useState } from 'react';

const AppointmentPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [period, setPeriod] = useState('AM');
  const [services, setServices] = useState([]); // Now, services will be an array to hold multiple selected services
  const [confirmation, setConfirmation] = useState('');

  const serviceOptions = [
    { name: 'Haircut', description: 'A stylish haircut to freshen up your look.' },
    { name: 'Beard Trim', description: 'Trim and shape your beard to perfection.' },
    { name: 'Shave', description: 'A classic shave for a smooth finish.' },
    { name: 'Haircut & Beard Trim', description: 'Get both a fresh haircut and beard trim.' },
  ];

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setServices([...services, name]); // Add service to array if checked
    } else {
      setServices(services.filter((service) => service !== name)); // Remove service if unchecked
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTime = `${hour}:${minute} ${period}`;
    setConfirmation(`Appointment confirmed for ${name} on ${date} at ${formattedTime} for ${services.join(', ')} service(s).`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar (if needed) */}
      {/* <Navbar /> */}

      <div className="flex-grow flex justify-center items-center py-12">
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Book Your Barber Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number or Email</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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

          {confirmation && (
            <p className="mt-6 text-green-600 text-center font-medium">{confirmation}</p>
          )}
        </div>
      </div>

      {/* Footer (if needed) */}
      {/* <Footer /> */}
    </div>
  );
};

export default AppointmentPage;
