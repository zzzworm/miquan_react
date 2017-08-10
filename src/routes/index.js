import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

import Question from '../components/question/index'


const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route path="/question" component={Question}>
      </Route>
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
