import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date(),
      title: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, title } = this.state;
    this.props.addArticle({ id, title });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <label htmlFor="Title">Title</label>
        </div>
        <button type="submit" className="waves-effect waves-light btn">Save</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
