import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPost } from "../actions/index";

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const { post, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          {post.map(el => (
            <div key={el.id} className="col">
              <h5 className="blue-text">{el.title}</h5>
              <br />
              <br />
              <span className="collection-item">{el.body}</span>
              <br/><br/>
              <div>
                <Link to="/">
                  <button className="btn"> Back</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { post: state.oneArticle, loading: state.loading };
};

export default connect(mapStateToProps, { fetchPost })(PostShow);
