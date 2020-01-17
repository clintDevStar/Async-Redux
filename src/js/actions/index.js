import { ADD_ARTICLE, DATA_LOADED, DATA_LOADING, FETCH_POST } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}


export function getData() {
  return function(dispatch) {
    dispatch({ type: DATA_LOADING })
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}

export function fetchPost(id){
  return function(dispatch){
    dispatch({ type: DATA_LOADING })
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: FETCH_POST, payload: json})
    })
  }
}
