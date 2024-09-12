import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log("⛁ Database connected on:", db.connection.host);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

export default connectDatabase;
