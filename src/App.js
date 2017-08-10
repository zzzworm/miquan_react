import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route } from 'react-router'
import routes from './routes'

const App = ({ history }) => {
  return (
    <Router history={history}>
      { routes }
    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
