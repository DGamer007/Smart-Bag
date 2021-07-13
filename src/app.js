import 'core-js/stable'
import 'regenerator-runtime/runtime'
// imports above are replacement for @babel/polyfill

import React from 'react'
import ReactDOM from 'react-dom'

import SmartBag from './components/SmartBag'

import './styles/styles.scss'

ReactDOM.render(<SmartBag />, document.getElementById('root'))