import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
// import { api } from "../api";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await api.get(`/events/${id}`);
        setEvent(data);
      } catch (err) {
        console.error("Error fetching event details", err);
      }
    };
    fetchEvent();
  }, [id]);

  const handleRSVP = async () => {
    try {
      await api.post(`/events/${id}/rsvp`);
      alert("RSVP successful!");
    } catch (err) {
      console.error("Error RSVPing", err);
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
      <button
        onClick={handleRSVP}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        RSVP
      </button>
    </div>
  );
};

export default EventDetails;
