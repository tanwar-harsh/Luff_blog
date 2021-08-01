import React from "react";
import { Box } from "@material-ui/core";

//components
import Header from "./components/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Box style={{ marginTop: "64px" }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
