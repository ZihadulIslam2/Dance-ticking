import React, { useState } from 'react';

function AddClassForm() {
  const [classType, setClassType] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Class added:', { classType, date, timeFrom, timeTo, ticketPrice });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classType">
          Class Type
        </label>
        <select
          id="classType"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a class type</option>
          <option value="NYC/NJ Group">NYC/NJ Group</option>
          <option value="Private">Private</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeFrom">
            Time From
          </label>
          <input
            type="time"
            id="timeFrom"
            value={timeFrom}
            onChange={(e) => setTimeFrom(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeTo">
            Time To
          </label>
          <input
            type="time"
            id="timeTo"
            value={timeTo}
            onChange={(e) => setTimeTo(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketPrice">
          Ticket Price
        </label>
        <input
          type="number"
          id="ticketPrice"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter price in cents"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post Class
        </button>
      </div>
    </form>
  );
}

export default AddClassForm;

