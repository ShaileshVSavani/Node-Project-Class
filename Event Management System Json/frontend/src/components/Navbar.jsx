
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../context/AuthContext";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav className="bg-blue-500 p-4 shadow-md">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-xl font-bold">Eventify</Link>

//         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white lg:hidden">
//           &#9776;
//         </button>

//         <div className={`lg:flex items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        
//           <Link to="/events" className="text-white px-4 py-2 hover:bg-blue-600 rounded">Events</Link>
//           {user ? (
//             <>
//               <Link to="/profile" className="text-white px-4 py-2 hover:bg-blue-600 rounded">Profile</Link>
//               <button onClick={logout} className="text-white px-4 py-2 hover:bg-blue-600 rounded">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-white px-4 py-2 hover:bg-blue-600 rounded">Login</Link>
//               <Link to="/signup" className="text-white px-4 py-2 hover:bg-blue-600 rounded">Sign Up</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Eventify</Link>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-white lg:hidden"
        >
          &#9776;
        </button>

        <div className={`lg:flex items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Common Links */}
          <Link to="/event" className="text-white px-4 py-2 hover:bg-blue-600 rounded">
            Events
          </Link>
          <Link to="/create-event" className="text-white px-4 py-2 hover:bg-blue-600 rounded">
            Create Event
          </Link>
          {user ? (
            <>
              {/* Authenticated User Links */}
              <Link to="/profile" className="text-white px-4 py-2 hover:bg-blue-600 rounded">
                Profile
              </Link>
              <button 
                onClick={logout} 
                className="text-white px-4 py-2 hover:bg-blue-600 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Guest User Links */}
              <Link to="/login" className="text-white px-4 py-2 hover:bg-blue-600 rounded">
                Login
              </Link>
              <Link to="/signup" className="text-white px-4 py-2 hover:bg-blue-600 rounded">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
