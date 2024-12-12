
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  // Fetch post details
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Error fetching post');
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // Handle post delete
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        navigate('/'); // Navigate to home or a different page after deletion
      } catch (error) {
        console.error('Error deleting post:', error);
        setError('Error deleting post');
      }
    }
  };

  // Modal control
  const openModal = () => setShowModal(true); // Open modal
  const closeModal = () => setShowModal(false); // Close modal

  // Loading and error handling UI
  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">{post.title}</h1>
          <p className="text-sm text-gray-500 mt-2">{new Date(post.createdAt).toLocaleString()}</p>
          <p className="text-lg text-gray-700 mt-4">{post.content}</p>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md transition duration-300">
              Back
            </button>
            <button
              onClick={openModal} // Open the modal on edit
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300">
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition duration-300">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Modal for editing the post */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await axios.put(`http://localhost:5000/api/posts/${id}`, {
                    title: e.target.title.value,
                    content: e.target.content.value,
                  });
                  closeModal(); // Close modal after update
                  setPost({ ...post, title: e.target.title.value, content: e.target.content.value }); // Update post in state
                  navigate(`/post/${id}`); // Navigate to the updated post page
                } catch (error) {
                  console.error('Error updating post:', error);
                }
              }}
            >
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={post.title}
                  className="w-full p-3 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700">Content</label>
                <textarea
                  id="content"
                  name="content"
                  defaultValue={post.content}
                  className="w-full p-3 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="flex justify-between space-x-4">
                <button
                  type="button"
                  onClick={closeModal} // Close modal without saving
                  className="px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Update Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
