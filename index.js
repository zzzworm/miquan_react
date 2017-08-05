import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Question from './modules/question/index'
import QuestionList from './modules/question/QuestionList'
import QuestionDetail from './modules/question/QuestionDetail'
import QuestionCreate from './modules/question/QuestionCreate'
import Home from './modules/Home'
import Profile from './modules/Profile'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render((
  <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/question" component={Question}>
        <IndexRoute component={QuestionList}/>
        <Route path="list" component={QuestionList} />
        <Route path="detail/:id" component={QuestionDetail} />
        <Route path="create" component={QuestionCreate} />
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
  </MuiThemeProvider>
), document.getElementById('app'))
