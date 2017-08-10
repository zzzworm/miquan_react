import 'whatwg-fetch';

export function fetchQuestionList(pageID) {
  return dispatch => {
    dispatch({type: 'FETCH_QUESTION_LIST_PENDING'});

    fetch(`https://api.spotify.com/v1/albums/${albumId}?market=CA`).then(
      response => response.json().then(
        data => dispatch({
            type: 'FETCH_QUESTION_LIST_FULFILLED',
            payload: data
          })
      ),
      err => dispatch({
        type: 'FETCH_QUESTION_LIST_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
