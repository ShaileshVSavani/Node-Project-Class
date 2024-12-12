
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts') // Replace with your API URL
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pt-20">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-24 px-6 sm:px-12 md:px-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Our Personal Blog</h1>
        <p className="text-lg sm:text-xl mb-8">Your go-to place for insightful articles and stories</p>
        <Link to="/create" className="inline-block text-lg bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-md transform transition-all duration-300 hover:scale-105">
          Create a Post
        </Link>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Featured Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(0, 6).map(post => (
              <div key={post._id} className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={post.imageUrl || 'https://via.placeholder.com/400x200'}
                  alt={post.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{new Date(post.createdAt).toLocaleDateString()}</p>
                  <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
                  <Link to={`/post/${post._id}`} className="text-blue-600 hover:text-blue-800 font-semibold">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Personal Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
