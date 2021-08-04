import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
      fontSize: 14,
      wordBreak: "break-word",
  },
});

const Post = ({post}) => {
  const classes = useStyles();
  const url = post.picture || "https://i.imgur.com/uaPwCQE.jpg";
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} />
      <Typography className={classes.text}>{post.categories}</Typography>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Typography className={classes.text}>Author: {post.username}</Typography>
      <Typography className={classes.detail}>{post.description}</Typography>
    </Box>
  );
};

export default Post;
