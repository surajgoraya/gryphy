import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const myTheme = Themes.createFromLight({
  type: "Custom",
  palette: {
    "success": "#c20430",
    "link": "#c20430"
  }
});

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider themes={[myTheme]} themeType="Custom">
       <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);