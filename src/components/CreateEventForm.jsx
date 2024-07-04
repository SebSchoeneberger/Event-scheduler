//Tibor CreateEventPage.jsx
import React, { useState } from 'react';

function CreateEventForm() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      setError('No API token found.');
      return;
    }
    if (eventName.length < 3 ) {
      return alert("The event title must be min. 3 characters long, please change it!")
    }
    try {
      const response = await fetch('http://localhost:3333/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          title: eventName,
          description: eventDescription,
          date: eventDate,
          location: eventLocation, // hardcoded in swagger.js, schema/event.js, models/events.js
          organizerId: 1 // should get from localstorage 
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Event created successfully:', data);
      
    } catch (error) {
      setError('Failed to create event. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Event Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder = "please enter at least 3 characters"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Event Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Event Location</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder = "please enter the locations name"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Event Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder = "please enter your event's description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Event</button>
      </form>
    </div>
    </>
  );
};

export default CreateEventForm;