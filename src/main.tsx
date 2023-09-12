import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store/index'
import CssVariables from '@/components/css-variables.tsx'
import App from './App.tsx'
import './styles/global.scss'

import '@/mock/index'
import '@/api/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVariables />
      <App />
    </Provider>
  </React.StrictMode>,
)
