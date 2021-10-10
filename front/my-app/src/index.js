import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContextProvider";

const app = (
  <BrowserRouter>
      <Provider store={store}>
          <AuthContextProvider>
              <App/>
          </AuthContextProvider>
      </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);