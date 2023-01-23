import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import history from "./utils/history";

import { ThemeProvider } from "@mui/material/styles"
import { Auth0Provider } from "@auth0/auth0-react"

import ThemeApp from "./ThemeApp"
import { getConfig } from './config'

const config = getConfig();

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeApp}>
      <Auth0Provider {...providerConfig}>
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
