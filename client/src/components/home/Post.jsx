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

const Post = () => {
  const classes = useStyles();
  const url = "https://i.imgur.com/uaPwCQE.jpg";
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Post Image" />
      <Typography className={classes.text}>Music</Typography>
      <Typography className={classes.heading}>Luff-Blog</Typography>
      <Typography className={classes.text}>lorem</Typography>
      <Typography className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem vero et illum optio excepturi esse nihil eos. Nisi voluptatibus maxime odio dignissimos saepe praesentium a facere est corrupti ut!</Typography>
    </Box>
  );
};

export default Post;
