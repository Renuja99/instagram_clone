import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Login from './screens/Login'
import Register from './screens/Register'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
