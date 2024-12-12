// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String },
//     date: { type: Date, required: true },
//     location: { type: String, required: true },
//     maxAttendees: { type: Number, required: true },
//     attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//     creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// });

// module.exports = mongoose.model('Event', eventSchema);




const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    maxAttendees: { type: Number, required: true },
    type: { type: String, required: true }, // New field
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Event', eventSchema);
