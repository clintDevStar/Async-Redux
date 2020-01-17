import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../actions/index";

export class Post extends Component {
  componentDidMount() {
    // calling the api action creator
    this.props.getData();
  }

  render() {
    const { articles, loading } = this.props
    if(loading){
      return <div>Loading...</div>
    }
    return (
      <>
      {articles.map(el => (
        <ul key={el.id} className="collection">
          <Link to={`/post/${el.id}`}>
          <li className="collection-item">{el.title}</li>
          </Link>
        </ul>
      ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.remoteArticles.slice(0, 10),
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getData })(Post);
