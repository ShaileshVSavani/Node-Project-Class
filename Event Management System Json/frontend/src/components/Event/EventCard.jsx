import React from "react";

const EventCard = ({ event, onRSVP }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p>{event.description}</p>
      <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
      <button
        onClick={() => onRSVP(event._id)}
        className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
      >
        RSVP
      </button>
    </div>
  );
};

export default EventCard;
