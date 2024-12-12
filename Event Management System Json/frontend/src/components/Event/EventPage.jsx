// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EventPage = () => {
//     const [filters, setFilters] = useState({
//         date: "",
//         location: "",
//         type: "",
//     });
//     const [events, setEvents] = useState([]);

//     // Function to fetch events based on filters
//     const fetchFilteredEvents = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/api/events", {
//                 params: {
//                     date: filters.date,
//                     location: filters.location,
//                     type: filters.type,
//                 },
//             });
//             setEvents(response.data);
//         } catch (error) {
//             console.error("Error fetching filtered events:", error);
//         }
//     };

//     // Fetch events when filters change
//     useEffect(() => {
//         fetchFilteredEvents();
//     }, [filters]); // Dependency array: runs whenever filters change

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl mb-4">Events</h1>
//             <div className="mb-4 flex gap-4">
//                 <input
//                     type="date"
//                     value={filters.date}
//                     onChange={(e) => setFilters({ ...filters, date: e.target.value })}
//                     className="border p-2"
//                     placeholder="Filter by Date"
//                 />
//                 <input
//                     type="text"
//                     value={filters.location}
//                     onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//                     className="border p-2"
//                     placeholder="Filter by Location"
//                 />
//                 <input
//                     type="text"
//                     value={filters.type}
//                     onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//                     className="border p-2"
//                     placeholder="Filter by Type"
//                 />
//             </div>

//             <div>
//                 {events.length > 0 ? (
//                     events.map((event) => (
//                         <div key={event._id} className="border p-4 mb-4">
//                             <h2 className="text-xl font-bold">{event.title}</h2>
//                             <p>{event.description}</p>
//                             <p>
//                                 <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
//                             </p>
//                             <p>
//                                 <strong>Location:</strong> {event.location}
//                             </p>
//                             <p>
//                                 <strong>Type:</strong> {event.type}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No events found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default EventPage;





import React, { useState, useEffect } from "react";

const EventPage = () => {
    const [filters, setFilters] = useState({
        date: "",
        location: "",
        type: "",
    });
    const [events, setEvents] = useState([]);

    // Function to filter events from localStorage based on filters
    const filterEvents = (storedEvents) => {
        return storedEvents.filter((event) => {
            const matchesDate = filters.date ? event.date === filters.date : true;
            const matchesLocation = filters.location ? event.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
            const matchesType = filters.type ? event.type.toLowerCase().includes(filters.type.toLowerCase()) : true;

            return matchesDate && matchesLocation && matchesType;
        });
    };

    // Fetch events from localStorage and apply filters
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        console.log("Stored Events:", storedEvents); // Check what is retrieved from localStorage

        // Apply filters
        const filteredEvents = filterEvents(storedEvents);
        setEvents(filteredEvents);
    }, [filters]); // Dependency array: runs whenever filters change

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Events</h1>
            <div className="mb-4 flex gap-4">
                <input
                    type="date"
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    className="border p-2"
                    placeholder="Filter by Date"
                />
                <input
                    type="text"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="border p-2"
                    placeholder="Filter by Location"
                />
                <input
                    type="text"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="border p-2"
                    placeholder="Filter by Type"
                />
            </div>

            <div>
                {events.length > 0 ? (
                    events.map((event) => (
                        <div key={event.eventId} className="border p-4 mb-4">
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p>{event.description}</p>
                            <p>
                                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Location:</strong> {event.location}
                            </p>
                            <p>
                                <strong>Type:</strong> {event.type}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </div>
    );
};

export default EventPage;
