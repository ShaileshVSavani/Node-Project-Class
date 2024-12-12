
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/pages/Home";
import EventPage from "./components/Event/EventPage";
import EventForm from "./components/Event/EventForm";
import Profile from "./components/pages/Profile";


const App = () => {
  return (
    <AuthProvider>
      
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <PrivateRoute path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-event" element={<EventForm />} />
          {/* Add other routes here */}
        </Routes>
     
    </AuthProvider>
  );
};

export default App;
