/**
 * The Routing Component for the Single Page App
 */
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './_root'
import About from './About'
import Topics from './Topics'

const Router = props =>
  <BrowserRouter>
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/topics'>
        <Topics />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>

export default Router
