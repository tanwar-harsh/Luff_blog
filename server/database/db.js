import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = async () => {
  try {
    const URL = process.env.DB_URL;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error while connection to mongoDb ", error);
  }
};
export default Connection;
