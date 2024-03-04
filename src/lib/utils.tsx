import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const connectDB = async () => {
  try {
    // Check if Mongoose already has a connection
    if (mongoose.connection.readyState === 1) {
      console.log("Using existing connection");

      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(error.message);
  }
};

// Listen for disconnection events
mongoose.connection.on("disconnected", () => {
  console.log("Lost MongoDB connection, trying to reconnect...");
});

// Listen for connection error events
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Export the mongoose connection
export default mongoose.connection;
