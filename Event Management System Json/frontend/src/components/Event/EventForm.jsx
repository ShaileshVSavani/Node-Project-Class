
// import React, { useState, useContext } from "react";
// import axios from "axios";
// import AuthContext from "../../context/AuthContext";
// // import { AuthContext } from "../context/AuthContext";

// const EventForm = () => {
//   const { user } = useContext(AuthContext); // Access the authenticated user
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     maxAttendees: "",
//     imageUrl: "",
//   });
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // Handle image upload to Cloudinary
//   const handleImageUpload = async () => {
//     if (!image) return alert("Please select an image.");
//     setUploading(true);

//     const imageFormData = new FormData();
//     imageFormData.append("file", image);
//     imageFormData.append("upload_preset", "rmitiypa"); // Replace with your unsigned preset
//     imageFormData.append("cloud_name", "dl8hsmer2"); // Replace with your Cloudinary cloud name

//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dl8hsmer2/image/upload", // Replace with your Cloudinary upload URL
//         imageFormData
//       );
//       setFormData({ ...formData, imageUrl: response.data.secure_url });
//       alert("Image uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Image upload failed. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Handle event submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.imageUrl) {
//       return alert("Please upload an image before creating the event.");
//     }

//     try {
//       await axios.post(
//         "http://localhost:5000/api/events", // Replace with your backend API endpoint
//         formData,
//         {
//           headers: { Authorization: `Bearer ${user.token}` }, // Pass user token for authentication
//         }
//       );
//       alert("Event created successfully!");
//       setFormData({
//         title: "",
//         description: "",
//         date: "",
//         location: "",
//         maxAttendees: "",
//         imageUrl: "",
//       });
//       setImage(null);
//     } catch (error) {
//       console.error("Failed to create event:", error);
//       alert("Event creation failed. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//       <h2 className="text-xl mb-4">Create Event</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         className="block w-full p-2 border mb-4"
//         value={formData.title}
//         onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Description"
//         className="block w-full p-2 border mb-4"
//         value={formData.description}
//         onChange={(e) =>
//           setFormData({ ...formData, description: e.target.value })
//         }
//       />
//       <input
//         type="date"
//         className="block w-full p-2 border mb-4"
//         value={formData.date}
//         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         className="block w-full p-2 border mb-4"
//         value={formData.location}
//         onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Max Attendees"
//         className="block w-full p-2 border mb-4"
//         value={formData.maxAttendees}
//         onChange={(e) =>
//           setFormData({ ...formData, maxAttendees: e.target.value })
//         }
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="block w-full mb-4"
//       />
//       <button
//         type="button"
//         onClick={handleImageUpload}
//         disabled={uploading}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//       >
//         {uploading ? "Uploading..." : "Upload Image"}
//       </button>
//       {formData.imageUrl && (
//         <img src={formData.imageUrl} alt="Event" className="w-40 h-40 mb-4" />
//       )}
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//         Create Event
//       </button>
//     </form>
//   );
// };

// export default EventForm;




// import React, { useState, useContext } from "react";
// import axios from "axios";
// import AuthContext from "../../context/AuthContext";

// const EventForm = () => {
//   const { user } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     maxAttendees: "",
//     imageUrl: "",
//   });
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // Handle image upload to Cloudinary
//   const handleImageUpload = async () => {
//     if (!image) return alert("Please select an image.");
//     setUploading(true);

//     const imageFormData = new FormData();
//     imageFormData.append("file", image);
//     imageFormData.append("upload_preset", "rmitiypa"); // Replace with your unsigned preset
//     imageFormData.append("cloud_name", "dl8hsmer2"); // Replace with your Cloudinary cloud name

//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dl8hsmer2/image/upload", // Replace with your Cloudinary upload URL
//         imageFormData
//       );
//       setFormData({ ...formData, imageUrl: response.data.secure_url });
//       alert("Image uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Image upload failed. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Handle event submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.imageUrl) {
//       return alert("Please upload an image before creating the event.");
//     }

//     try {
//       await axios.post(
//         "http://localhost:5000/api/events", // Replace with your backend API endpoint
//         formData,
//         {
//           headers: { Authorization: `Bearer ${user.token}` }, // Pass user token for authentication
//         }
//       );
//       alert("Event created successfully!");
//       setFormData({
//         title: "",
//         description: "",
//         date: "",
//         location: "",
//         maxAttendees: "",
//         imageUrl: "",
//       });
//       setImage(null);
//     } catch (error) {
//       console.error("Failed to create event:", error);
//       alert("Event creation failed. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//       <h2 className="text-xl mb-4">Create Event</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         className="block w-full p-2 border mb-4"
//         value={formData.title}
//         onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Description"
//         className="block w-full p-2 border mb-4"
//         value={formData.description}
//         onChange={(e) =>
//           setFormData({ ...formData, description: e.target.value })
//         }
//       />
//       <input
//         type="date"
//         className="block w-full p-2 border mb-4"
//         value={formData.date}
//         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         className="block w-full p-2 border mb-4"
//         value={formData.location}
//         onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Max Attendees"
//         className="block w-full p-2 border mb-4"
//         value={formData.maxAttendees}
//         onChange={(e) =>
//           setFormData({ ...formData, maxAttendees: e.target.value })
//         }
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="block w-full mb-4"
//       />
//       <button
//         type="button"
//         onClick={handleImageUpload}
//         disabled={uploading}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//       >
//         {uploading ? "Uploading..." : "Upload Image"}
//       </button>

//       {/* Removed image preview from here */}

//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//         Create Event
//       </button>
//     </form>
//   );
// };

// export default EventForm;




import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const EventForm = () => {
  const { user } = useContext(AuthContext); // Assuming user context is being used
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    maxAttendees: "",
    type: "",
  });
  const [error, setError] = useState(""); // To display error messages

  // Handle event submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation to check if all fields are filled
    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.location ||
      !formData.maxAttendees ||
      !formData.type
    ) {
      setError("All fields are required.");
      return;
    }

    // Simulating event creation by storing it in localStorage
    try {
      // Simulate event ID creation
      const eventId = new Date().toISOString();
      const eventData = { ...formData, creator: user?.id, eventId };
      
      // Store event in localStorage
      const events = JSON.parse(localStorage.getItem("events")) || [];
      events.push(eventData);
      localStorage.setItem("events", JSON.stringify(events));

      // Reset the form and clear error
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        maxAttendees: "",
        type: "",
      });
      setError(""); // Clear any previous errors
      alert("Event created successfully!");

    } catch (error) {
      console.error("Error storing event:", error);
      setError("Event creation failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="text-xl mb-4">Create Event</h2>

      {/* Show error message if validation fails */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="text"
        placeholder="Title"
        className="block w-full p-2 border mb-4"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="block w-full p-2 border mb-4"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="date"
        className="block w-full p-2 border mb-4"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        className="block w-full p-2 border mb-4"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Attendees"
        className="block w-full p-2 border mb-4"
        value={formData.maxAttendees}
        onChange={(e) =>
          setFormData({ ...formData, maxAttendees: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Event Type"
        className="block w-full p-2 border mb-4"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      />

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
