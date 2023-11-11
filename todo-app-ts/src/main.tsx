import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'todomvc-app-css/index.css'
import './index.css'

const element = document.getElementById('root')

if (element === null) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
