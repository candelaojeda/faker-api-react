import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React, { Component } from "react";
import Books from "./components/Books";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home | </Link>
          <Link to="/books">Books | </Link>
          <Link to="/users">Users</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <h1>This is a home!</h1>
                </div>
              );
            }}
          ></Route>
          <Route path="/books" component={Books} />
          <Route path="/users" component={Users} />
        </Router>
      </div>
    );
  }
}

export default App;
