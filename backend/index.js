import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import lawRoute from "./route/law.route.js"; // Changed 'lawroute' to 'lawRoute' for naming consistency

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const DB_URI = process.env.MongoDB_URI; // Changed 'DBURI' to 'DB_URI' for naming consistency

mongoose.connect(DB_URI, { // Changed 'URI' to 'DB_URI' to match the variable name
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("Error connecting to MongoDB:", error));

// Corrected the route middleware to use '/law' instead of 'law'
app.use("/law", lawRoute);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});