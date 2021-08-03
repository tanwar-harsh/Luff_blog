import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

//components
import Post from "./Post";

const Posts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return posts.map((post) => (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Link to="/detail" style={{ textDecoration: "none", color: "inherit" }}>
        <Post />
      </Link>
    </Grid>
  ));
};

export default Posts;
