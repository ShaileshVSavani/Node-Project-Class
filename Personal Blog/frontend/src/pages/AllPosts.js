
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts') // Use full URL for API call
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">All Blog Posts</h1>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x200" 
                  alt="Post Thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
                  <Link
                    to={`/post/${post._id}`}
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-center text-gray-500">No posts available. Try creating one!</p>
        )}
      </div>
    </div>
  );
}

export default AllPosts;
