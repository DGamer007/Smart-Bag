import 'core-js/stable'
import 'regenerator-runtime/runtime'
// imports above are replacement for @babel/polyfill

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import SmartBag from './components/SmartBag'

import './styles/styles.scss'

const history = createBrowserHistory()

ReactDOM.render(<SmartBag />, document.getElementById('root'))