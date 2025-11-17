import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define a mongodb environment variable inside .env.<development | production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to db on ${NODE_ENV} mode`);
  } catch (err) {
    console.error("Error connecting to db", err);
    process.exit(1);
  }
};

export default connectToDatabase;
