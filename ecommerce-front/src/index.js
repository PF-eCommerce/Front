import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from "react-redux";

import store from "./redux/store/store";
import App from "./App.jsx";
import "./index.css";
import theme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-2jwsrt5msmn8rjm0.us.auth0.com"
        clientId="g6hlIryhVQV2gwSivrPOby4EKK0Ql4KW"
        redirectUri={window.location.origin}
        audience="this is a inique indetifier"
        scope="openid profile email">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
