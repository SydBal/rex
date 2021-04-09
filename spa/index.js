import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'

import './scss/index.scss'

const Root = () =>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>

render(<Root />, document.getElementById('spa-entry'))
