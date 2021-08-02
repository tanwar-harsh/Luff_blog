import { makeStyles, Box, Typography } from "@material-ui/core";

const url1 = "https://i.imgur.com/o1Dc1Uj.png";

const useStyles = makeStyles({
  image: {
    background: `url(${url1}) center/55% repeat-x #000`,
    width: "100vw",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& :first-child": {
      fontSize: 50,
        color: "white",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 70,
      color: "white",
    },
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>Welcome to,</Typography>
      <Typography>Luff-Blog</Typography>
    </Box>
  );
};

export default Banner;
