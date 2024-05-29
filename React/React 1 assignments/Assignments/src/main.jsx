import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import MultiCounterFun from './MultiCounter'
// import CounterApp from './counterApp'
// import GreetingsApp from './GreetingsApp.jsx'
// import ConditionalRenderingApp from './ConditionalRenderingApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ConditionalRenderingApp /> */}
  {/* <CounterApp /> */}
  <MultiCounterFun />
  </React.StrictMode>,
)
