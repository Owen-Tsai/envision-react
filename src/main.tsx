import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/store/index'
import CssVariables from '@/components/css-variables.tsx'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import App from './App.tsx'
import './styles/global.scss'
import 'dayjs/locale/zh-cn'

import '@/mock/index'
import '@/api/index'

dayjs.locale('zh-cn')
dayjs.extend(weekday)
dayjs.extend(localeData)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVariables />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
