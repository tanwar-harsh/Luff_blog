import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { LockOutlined } from "@material-ui/icons";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

//components
import Icon from "./Icon";
import { AUTH } from "../../constants/data";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 200,
  },
  paper: {
    display: "flex",
    background: "#c8c2cc",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
    justifyContent: "center",
    width: 450,
  },
  heading: {
    fontSize: 25,
    fontWeight: 600,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "70%",
  },
  textField: {
    marginTop: 15,
  },
  button: {
    margin: "30px 40px 0 40px",
  },
  button2: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "20px 0",
  },
});

const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  const switchMode = (isSignUp) => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar style={{ padding: 10, background: "white" }}>
          <LockOutlined fontSize="large" color="primary" />
        </Avatar>
        <Typography className={classes.heading}>
          {isSignUp ? "Sign Up" : "Login"}
        </Typography>
        <form className={classes.form}>
          {isSignUp && (
            <>
              <TextField
                onChange={(e) => handleChange(e)}
                name="firstName"
                placeholder=" First Name"
                className={classes.textField}
                variant="filled"
              />
              <TextField
                onChange={(e) => handleChange(e)}
                name="lastName"
                placeholder=" Last Name"
                className={classes.textField}
                variant="filled"
              />
            </>
          )}
          <TextField
            onChange={(e) => handleChange(e)}
            required
            name="email"
            placeholder=" Email"
            className={classes.textField}
            variant="filled"
          />
          <TextField
            onChange={(e) => handleChange(e)}
            required
            name="password"
            placeholder=" Password"
            className={classes.textField}
            variant="filled"
          />
          {isSignUp && (
            <>
              <TextField
                onChange={(e) => handleChange(e)}
                name="password2"
                placeholder="Confirm password"
                className={classes.textField}
                variant="filled"
              />
            </>
          )}
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>

          <GoogleLogin
            clientId="9556540863-q82l1ee8u1d7g9g9ll0ohu2jqlfbnfpl.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Icon />}
              >
                Google Sign in
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />

          <Box className={classes.button2}>
            <Button
              onClick={() => switchMode()}
              color="primary"
              style={{ fontSize: 12 }}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Create an Account"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Auth;
