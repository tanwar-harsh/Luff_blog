import {
  Box,
  makeStyles,
  TextareaAutosize,
  FormControl,
  InputBase,
  Button,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 50,
    fontSize: 18,
    "&:focus": {
      outline: "none",
    },
  },
}));

const CreateView = () => {
  const url = "https://i.imgur.com/uaPwCQE.jpg";
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src={url} alt="Create image" className={classes.image} />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action" />
        <InputBase placeholder="title" className={classes.textField} />
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>

      <TextareaAutosize
        rowsMin={5}
        placeholder="Tell your Story"
        className={classes.textarea}
      />
    </Box>
  );
};

export default CreateView;
