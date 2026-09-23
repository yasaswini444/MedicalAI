
import dns from "dns";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "MedicalAI API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});