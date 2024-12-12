import React from "react";
import EventDetails from "../Event/EventDetails";


const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 ">Welcome to Event Management</h1>
      <EventDetails  />
    </div>
  );
};

export default Home;
