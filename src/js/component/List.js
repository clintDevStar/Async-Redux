import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const ConnectedList = ({ articles }) => (
  <div>
    {articles.map(el => (
      <ul key={el.id} className="collection">
        <li className="collection-item">
          {el.title} 
        </li>
      </ul>
    ))}
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
