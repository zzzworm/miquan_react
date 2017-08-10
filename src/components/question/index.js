import React from 'react'
import QuestionList from './QuestionList'
import QuestionDetail from './QuestionDetail'
import QuestionCreate from './QuestionCreate'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


const Question = ({ match }) => (
      <div>
      <Route path={`${match.url}/list`} component={QuestionList} />
      <Route path={`${match.url}/detail/:questionId`} component={QuestionDetail} />
      <Route path={`${match.url}/create`} component={QuestionCreate} />
        <Route exact path={match.url} component={QuestionList} />
      </div>
)

export default Question
