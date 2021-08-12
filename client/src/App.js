import React, { useState } from "react";
import { Box, Paper } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//components
import Header from "./components/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import DetailView from "./components/post/DetailView";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";
import Auth from "./components/auth/Auth";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const switchDarkMode = (value) => {
    setDarkMode(!value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%", width: "100%" }}>
        <Header switchDarkMode={switchDarkMode} />
        <Box style={{ marginTop: 64 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/details/:id" component={DetailView} />
            <Route path="/create" component={CreateView} />
            <Route path="/update/:id" component={UpdateView} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
