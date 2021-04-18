import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import './index.css'

import reportWebVitals from './reportWebVitals'

import Home from './pages/Home'
import App from './pages/_App'


ReactDOM.render(
    <React.StrictMode>
         <Router>
            <Switch>
                <Route exact path="/">
                    <App component={Home} />
                </Route>
                <Route exact path="/about">
                    <App component={Home} />
                </Route>
            </Switch>
         </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
