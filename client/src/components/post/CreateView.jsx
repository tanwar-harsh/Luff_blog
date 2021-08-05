import { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  TextareaAutosize,
  FormControl,
  InputBase,
  Button,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { createPost, uploadFile } from "../../service/api";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 5,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 50,
    fontSize: 18,
    "&:focus": {
      outline: "none",
    },
  },
}));

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "Harsh",
  categories: "All",
  createdDate: new Date(),
};

const CreateView = () => {
  const classes = useStyles();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.picture ? post.picture : "https://i.imgur.com/uaPwCQE.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img src={url} className={classes.image} />
      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
          <AddCircle fontSize="large" color="action" />
        </label>
        <input
          onChange={(e) => {
            setFile(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
          type="file"
          id="fileInput"
          style={{ display: "none" }}
        />

        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          className={classes.textField}
          name="title"
        />

        <Button onClick={() => savePost()} variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>

      <TextareaAutosize
        onChange={(e) => handleChange(e)}
        minRows={5}
        placeholder="Tell your Story"
        className={classes.textarea}
        name="description"
      />
    </Box>
  );
};

export default CreateView;
