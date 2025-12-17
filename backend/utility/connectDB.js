import mongoose from "mongoose";

const ConnectDb = async (DATABASE_URL) => {
  try {
    if (!DATABASE_URL) {
      throw new Error("DATABASE_URL is missing or undefined");
    }

    await mongoose.connect(DATABASE_URL);
    console.log("Connected to database successfully by Vaishu");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default ConnectDb;
