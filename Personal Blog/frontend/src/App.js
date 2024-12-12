
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import Navbar from './components/Navbar';
import AllPosts from './pages/AllPosts';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route path="/allPosts" element={<ProtectedRoute element={<AllPosts />} />} />
        <Route path="/create" element={<ProtectedRoute element={<CreatePost />} />} />
        <Route path="/post/:id" element={<ProtectedRoute element={<PostDetails />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
      </Routes>
    </div>
  );
}

export default App;


