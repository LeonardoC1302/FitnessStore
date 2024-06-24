import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { CartDropdownProvider } from './contexts/cart-dropdown.context.jsx'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <CartDropdownProvider>
          <App />
        </CartDropdownProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
