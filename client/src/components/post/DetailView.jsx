import { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";

import { getPost, deletePost } from "../../service/api";

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
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    margin: "20px 0",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const DetailView = ({ match }) => {
  const classes = useStyles();
  const url = "https://i.imgur.com/uaPwCQE.jpg";
  const history = useHistory();
  const location = useLocation();

  const [post, setPost] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, [match.params.id]);

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img src={post.picture || url} className={classes.image} />
      {user?.result.name == post.username ||
      user?.result.email == "test@gmail.com" ? (
        <Box className={classes.icons}>
          <Link to={`/update/${post._id}`}>
            <Edit className={classes.icon} color="primary" />
          </Link>
          <Delete
            onClick={() => deleteBlog()}
            className={classes.icon}
            color="error"
          />
        </Box>
      ) : (
        <Box></Box>
      )}
      <Typography className={classes.heading}>{post.title}</Typography>

      <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.link}>
          <Typography>
            <span style={{ fontWeight: 600 }}>Author: {post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>

      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailView;
