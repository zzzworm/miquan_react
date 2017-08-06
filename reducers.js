import { combineReducers } from 'redux';

import question from './modules/question/question.reducer';

import { routerReducer as routing } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  question,
  routing,
  form : reduxFormReducer
});
