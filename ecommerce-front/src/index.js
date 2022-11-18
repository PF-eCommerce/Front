import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./utils/theme";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import {Auth0Provider} from '@auth0/auth0-react'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_TRESBIEN || 'http://localhost:3001'

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
