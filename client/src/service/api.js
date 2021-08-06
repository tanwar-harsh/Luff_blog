import axios from "axios";

/* const URL = "http://localhost:8000"; */

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const createPost = async (post) => {
  try {
    return await API.post(`/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API", error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let response = await API.get(`/posts${param}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await API.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    await API.post(`/update/${id}`, post);
  } catch (error) {
    console.log("Error while updating post", error);
  }
};

export const deletePost = async (id) => {
  try {
    await API.delete(`/delete/${id}`);
  } catch (error) {
    console.log("Error while deleting post", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await API.post(`/file/upload`, data);
  } catch (error) {
    console.log("Error while uploading the image", error);
  }
};

export const signIn = (formData) => API.post(`/users/signin`, formData);

export const signUp = (formData) => API.post(`/users/signup`, formData);
