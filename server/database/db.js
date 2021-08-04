import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL =
      "mongodb://user:luffyguy123@luffyguy-shard-00-00.urqs4.mongodb.net:27017,luffyguy-shard-00-01.urqs4.mongodb.net:27017,luffyguy-shard-00-02.urqs4.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-32wlkp-shard-0&authSource=admin&retryWrites=true&w=majority";
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
