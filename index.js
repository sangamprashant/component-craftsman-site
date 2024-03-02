const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv package

const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Route handler for the root endpoint
app.get("/",(req,res)=>{
    res.send(`
        <h1>Server is Running..</h1>
    `);
});

// Import subscriber router and define route
const subs = require("./router/subscriber");
app.use("/api", subs);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
