import { ADD_ARTICLE, DATA_LOADED, DATA_LOADING, FETCH_POST } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  oneArticle: [],
  loading: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload),
        loading: false
      });
    case DATA_LOADING:
      return Object.assign({}, state, {
        loading: true
      })
    case FETCH_POST:
      return Object.assign({}, state, {
        oneArticle: state.oneArticle.concat(action.payload),
        loading: false
      })
    default:
      return state;
  }
}

export default rootReducer;
