//using multer middleware
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb://user:luffyguy123@luffyguy-shard-00-00.urqs4.mongodb.net:27017,luffyguy-shard-00-01.urqs4.mongodb.net:27017,luffyguy-shard-00-02.urqs4.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-32wlkp-shard-0&authSource=admin&retryWrites=true&w=majority",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];
    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
      }
      return {
          bucketName: "photos",
          fileName: `${Date.now()}-blog-${file.originalname}`,
      }
  },
});

export default multer({storage});