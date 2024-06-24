import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { UserProvider } from './contexts/user.context.jsx'
import { CategoriesProvider } from './contexts/categories.context.jsx'
import { CartDropdownProvider } from './contexts/cart-dropdown.context.jsx'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <CategoriesProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
