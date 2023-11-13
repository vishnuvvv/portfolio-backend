import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import projectRouter from "./routes/projectRoute.js";
import skillRouter from "./routes/skillRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/projects", projectRouter);
app.use("/api/skills", skillRouter);

const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    // Handle server errors
    app.on("error", (err) => {
      console.error("Error starting the server:", err);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

startServer();
