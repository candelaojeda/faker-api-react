import React, { Component } from "react";

export default class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=10");
    const data = await res.json();
    this.setState({ books: data });
  }

  render() {
    return (
      <div>
        <h1>Books here!</h1>
      </div>
    );
  }
}
