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
import { getPost, updatePost } from "../../service/api";
import { useHistory } from "react-router-dom";

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

const UpdateView = ({ match }) => {
  const url = "https://i.imgur.com/uaPwCQE.jpg";
  const classes = useStyles();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, [match.params.id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  };

  return (
    <Box className={classes.container}>
      <img src={url} className={classes.image} />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action" />
        <InputBase
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="title"
          value={post.title}
          className={classes.textField}
        />
        <Button
          onClick={() => updateBlog()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </FormControl>

      <TextareaAutosize
        onChange={(e) => handleChange(e)}
        name="description"
        minRows={5}
        placeholder="Tell your Story"
        value={post.description}
        className={classes.textarea}
      />
    </Box>
  );
};

export default UpdateView;
