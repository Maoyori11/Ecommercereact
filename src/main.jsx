import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './Pages/store'
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
