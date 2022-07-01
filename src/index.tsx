import React, { Component, StrictMode } from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import {storring} from './redux/store'
import {Provider} from "react-redux"
import { Store } from '@material-ui/icons';


createRoot.render(
  <StrictMode>
  <Provider store={storring}>
  <App/>
  </Provider>
  </StrictMode>,
  document.getElementById("root")
)


