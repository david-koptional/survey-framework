import { GeistProvider } from '@geist-ui/core'
import { Provider } from 'jotai'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <GeistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GeistProvider>
    </Provider>
  </React.StrictMode>
)
