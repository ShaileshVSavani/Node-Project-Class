// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element, ...rest }) => {
//   const user = localStorage.getItem('user'); // Check if the user is logged in (via localStorage or Redux)

//   return (
//     <Route
//       {...rest}
//       element={user ? element : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;





import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
