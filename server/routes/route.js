import express from "express";
import auth from "../middleware/auth.js";

//component
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import { signIn, signUp } from "../controller/user-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", auth, createPost);

router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);

router.post("/update/:id", auth, updatePost);

router.delete("/delete/:id", auth, deletePost);

router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

router.post("/users/signin", signIn);
router.post("/users/signup", signUp);

export default router;
