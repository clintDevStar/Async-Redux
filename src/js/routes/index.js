import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "../component/Home";
import PostShow from "../component/SinglePost";

const Routes = () => {
  return (
    <Router history={createHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={PostShow} />
      </Switch>
    </Router>
  );
};


export default Routes