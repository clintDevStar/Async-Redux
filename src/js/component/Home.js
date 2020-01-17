import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";

const Home = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col l6">
          <div className="">
            <h3 className="teal-text">Articles</h3>
            <Form />
          </div>
        </div>
        <div className="col l6">
          <h3 className="blue-text">Add a new article</h3>
          <List />
        </div>
      </div>
      <br/>
      <div className="row">
        <h3 className="teal-text">API posts</h3>
        <Post/>
      </div>
    </div>
  </>
);

export default Home;
