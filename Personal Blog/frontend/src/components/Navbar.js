
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext); // Access global state
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout(); // Call global logout
    navigate("/login"); // Redirect to login
  };

  const guestLinks = (
    <>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
    </>
  );

  const authLinks = (
    <>
      <Link to="/allPosts" className="nav-link">
        All Posts
      </Link>
      <Link to="/create" className="nav-link">
        Create Post
      </Link>
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
      <button onClick={handleLogout} className="nav-link">
        Logout
      </button>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-600">
          BlogSphere
        </Link>
        

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {isLoggedIn ? authLinks : guestLinks}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 ">
          <div className="container mx-auto px-6 ">
            {isLoggedIn ? authLinks : guestLinks}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
