import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
}));

const DetailView = () => {
  const classes = useStyles();
  const url = "https://i.imgur.com/uaPwCQE.jpg";
  return (
    <Box className={classes.container}>
      <img src={url} alt="Detail Image" className={classes.image} />
      <Box className={classes.icons}>
        <Link to="/update">
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete className={classes.icon} color="error" />
      </Box>
      <Typography className={classes.heading}>Title of the Blog</Typography>

      <Box className={classes.subheading}>
        <Typography>
          Author:<span style={{ fontWeight: 600 }}> Harsh</span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>2 Aug 2021</Typography>
      </Box>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        voluptatem consectetur? Odio quas harum repellat debitis ex, soluta
        quaerat unde eveniet voluptates incidunt? Officiis atque sint debitis
        praesentium, repellat eum.
      </Typography>
    </Box>
  );
};

export default DetailView;
