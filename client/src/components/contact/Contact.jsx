import { makeStyles, Box, Typography } from "@material-ui/core";

const url1 = "https://i.imgur.com/vPWRKjb.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  image: {
    background: `url(${url1}) center/55% repeat-x #000`,
    width: "100vw",
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& :last-child": {
      fontSize: 70,
      fontWeight: 700,
      color: "black",
    },
    [theme.breakpoints.down("xs")]: {
      "& :last-child": {
        fontSize: 50,
        fontWeight: 700,
        color: "black",
      },
    },
  },
  text: {
    padding: 100,
    fontSize: 25,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 50,
      fontSize: 18,
      textAlign: "center",
    },
  },
  strong: {
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image1: {
    width: 150,
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      width: 160,
      margin: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      margin: 16,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.image}>
        <Typography>Contact</Typography>
      </Box>
      <Typography className={classes.text}>
        <strong className={classes.strong}>Hey, I am Harsh</strong>
        <br />
        You can find me on -
      </Typography>
      <Box className={classes.link}>
        <a href="mailto:harshtanwar25@gmail.com" target="_blank">
          <img
            className={classes.image1}
            alt="Gmail"
            src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=white&style=for-the-badge"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-tanwar-22761017b"
          target="_blank"
        >
          <img
            className={classes.image1}
            alt="Linkedin"
            src="https://img.shields.io/badge/Linkedin-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge"
          />
        </a>
        <a href="https://github.com/luffyguy" target="_blank">
          <img
            className={classes.image1}
            alt="Linkedin"
            src="https://img.shields.io/badge/Github-lightgrey?logo=github&logoColor=white&style=for-the-badge"
          />
        </a>
      </Box>
    </Box>
  );
};

export default Contact;
