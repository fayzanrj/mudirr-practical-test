import mongoose from "mongoose";

const connectToDB = async () => {
  const dbURI = process.env.MONGO_URI!;

  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to the database");
    return true;
  }

  try {
    await mongoose.connect(dbURI);
    console.log("Database connection successful");
    return true;
  } catch (error) {
    console.error("Database connection error:", error);
    return false;
  }
};

export default connectToDB;
