// Libraries
import React from "react";
import { render } from "react-dom";

import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

// Component Imports
import App from "./App";

// Styles
import "./index.css";

render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
