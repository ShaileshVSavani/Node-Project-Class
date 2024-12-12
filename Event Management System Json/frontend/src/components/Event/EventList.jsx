// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const EventList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const { data } = await axios.get("http://localhost:5000/api/events");
//       setEvents(data);
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <h2>All Events</h2>
//       {events.map((event) => (
//         <div key={event._id}>
//           <h3>{event.title}</h3>
//           <p>{event.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [filters, setFilters] = useState({ date: '', location: '', type: '' });
  const [events, setEvents] = useState([]);

  const fetchFilteredEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events', {
        params: {
          date: filters.date,
          location: filters.location,
          type: filters.type,
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching filtered events:', error);
    }
  };

  // Fetch events when filters change
  useEffect(() => {
    fetchFilteredEvents();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <h2>Event List</h2>
      <div>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          placeholder="Type"
        />
      </div>
      <div>
        {events.map((event) => (
          <div key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
