import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2962ff"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

function App(props) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
        <Fab size="small" variant="extended" color="primary">
          this is an extended variant Fab
        </Fab>
        <Fab size="medium" variant="extended" color="primary">
          this is an extended variant Fab
        </Fab>
        <Fab variant="extended" color="primary">
          this is an extended variant Fab
        </Fab>
        <Button color="secondary">Secondary</Button>
      </MuiThemeProvider>
    </>
  );
}

export default App;
