import React from "react";
import ReactDOM from "react-dom";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

export const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiSelect: {
      variant: "outlined",
    },
    MuiButton: {
      variant: "outlined",
      size: "large",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
