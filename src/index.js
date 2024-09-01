import connectDB from "./db/index.js"; // sometimes it gives an error if we write it like ./db
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB();

// Approach - create an async iife function
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error while communicating with DB. Error Message: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("Server is running on port " + process.env.PORT);
//     });
//   } catch (error) {
//     console.log("Error while connecting to DB. Error Message: ", error);
//     throw error;
//   }
// })();

// connectDB();
