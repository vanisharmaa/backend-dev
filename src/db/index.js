import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // sometimes it gives an error if we write it like ../constants

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error while connecting to DB. Error Message: ", error);
    process.exit(1);
  }
};

export default connectDB;
