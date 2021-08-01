import { makeStyles, Box, Typography } from "@material-ui/core";

const url = "https://i.imgur.com/uaPwCQE.jpg";

const useStyles = makeStyles({
  image: {
    background: `url(${url}) center/55% repeat-x #000`,
    width: '100vw',
    height: '50vh',
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>Welcome</Typography>
      <Typography>Luff-Blog</Typography>
    </Box>
  );
};

export default Banner;
