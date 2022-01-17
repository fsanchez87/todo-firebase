import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Container, CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <CssBaseline />
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
