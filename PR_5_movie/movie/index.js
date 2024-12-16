const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');
const movieRoutes = require('./routes/movie.route');

const app = express();
const PORT = 8090;


app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the movie API'));
app.use('/user', userRoutes);
app.use('/movie', movieRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on PORT ${PORT}`)
});
