import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "normalize.css";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import theme from "./theme";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);
