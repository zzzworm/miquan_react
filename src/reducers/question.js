let questionListDefaultState = {
  list: [],
  banners: [{}],
  fetching: false,
  fetched: false,
  error: null
};

export default function questionListReducer(state = questionListDefaultState, action) {
  switch (action.type) {
    case 'FETCH_QUESTION_LIST_PENDING':
      return Object.assign({}, state, {fetching: true});
      break;
    case 'FETCH_QUESTION_LIST_FULFILLED':
      return Object.assign({}, state, action.payload,{fetching: false, fetched: true});
      break;
    default:
      return state;
  }
}
