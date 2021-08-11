import {
  Button,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  create: {
    margin: 20,
    color: "white",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(244, 244, 244, 1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/create" className={classes.link}>
        <Button variant="contained" color="primary" className={classes.create}>
          Create Blog
        </Button>
      </Link>

      <Button
        href="https://popa-topa.web.app/"
        target="_blank"
        variant="contained"
        color="secondary"
        className={classes.create}
        startIcon={<Image />}
      >
        Find Images
      </Button>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/" className={classes.link}>
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>
                <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
