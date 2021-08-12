import { makeStyles, Box, Typography } from "@material-ui/core";

const url1 = "https://i.imgur.com/K3BnxjM.png";

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
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.image}>
        <Typography>About</Typography>
      </Box>
      <Typography className={classes.text}>
        <strong> Luff - blog </strong> is a platform where people can share
        thier stories, knowledge and skills with thousands of people around the
        world.
        <br /> You can learn and teach new things here and can also make some
        friends in these crazy comment sections (which are yet to be added ofc
        lmao xD). <br />
        <hr /> Made with 💗 by Harsh Tanwar
      </Typography>
    </Box>
  );
};

export default About;
