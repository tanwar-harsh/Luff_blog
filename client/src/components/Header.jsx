import { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
  Switch,
  Paper,
  IconButton,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Brightness5, Brightness7 } from "@material-ui/icons";

//components
import * as data from "../constants/data";

const useStyles = makeStyles((theme) => ({
  component: {
    background: "white",
    color: "black",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& > *": {
      padding: "0 19px",
    },
    [theme.breakpoints.down("md")]: {
      "& > *": {
        padding: "0 10px",
        fontSize: 14,
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        padding: "0 5px",
        fontSize: 12,
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "250px",
    [theme.breakpoints.down("sm")]: {
      wadth: "200",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
    },
  },
  userName: {
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  mode: {
    display: "flex",
    alignItems: "center",
  },
}));

const Header = ({ switchDarkMode }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [dark, setDark] = useState(false);

  const logout = () => {
    dispatch({ type: data.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }

  const theme1 = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  useEffect(() => {
    setDark(dark);
  }, dark);

  return (
    <ThemeProvider theme={theme1}>
      <Paper>
        <AppBar className={classes.component}>
          {user?.result ? (
            <Toolbar className={classes.container}>
              <Link to="/" className={classes.link}>
                <Typography>HOME</Typography>
              </Link>
              <Link to="/about" className={classes.link}>
                <Typography>ABOUT</Typography>
              </Link>
              <Link to="/contact" className={classes.link}>
                <Typography>CONTACT</Typography>
              </Link>
              <Box className={classes.mode}>
                {dark ? <Brightness7 /> : <Brightness5 />}
                <Switch
                  checked={dark}
                  onChange={() => {
                    setDark(!dark);
                    console.log(dark);
                    switchDarkMode(dark);
                  }}
                />
              </Box>
              <Toolbar className={classes.toolbar}>
                <div className={classes.profile}>
                  <Avatar
                    style={{
                      backgroundColor: randomColor(),
                    }}
                    alt={user?.result.name}
                    src={user?.result.imageUrl}
                  >
                    {user?.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName}>
                    {user?.result.name}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.logout}
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              </Toolbar>
            </Toolbar>
          ) : (
            <Toolbar className={classes.container}>
              <Link to="/" className={classes.link}>
                <Typography>HOME</Typography>
              </Link>
              <Link to="/about" className={classes.link}>
                <Typography>ABOUT</Typography>
              </Link>
              <Link to="/contact" className={classes.link}>
                <Typography>CONTACT</Typography>
              </Link>
              <Box className={classes.mode}>
                {dark ? <Brightness7 /> : <Brightness5 />}
                <Switch
                  checked={dark}
                  onChange={() => {
                    setDark(!dark);
                    console.log(dark);
                    switchDarkMode(dark);
                  }}
                />
              </Box>
              <Toolbar className={classes.toolbar}>
                <div className={classes.profile}>
                  <Button component={Link} to="/auth" color="primary">
                    Login
                  </Button>
                </div>
              </Toolbar>
            </Toolbar>
          )}
        </AppBar>
      </Paper>
    </ThemeProvider>
  );
};

export default Header;
