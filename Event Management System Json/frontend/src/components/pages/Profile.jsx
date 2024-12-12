import React, { useEffect, useState } from "react";
import { api } from "../../api";


const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/auth/profile");
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <h2 className="text-2xl mt-6">Your Events</h2>
      <ul>
        {profile.events.map((event) => (
          <li key={event._id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
