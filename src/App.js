import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React, {Component} from "react";

class App extends Component() {
  render(){
    return(
      <div>
        <Router>
          <Link to="/">Home | </Link>
          <Link to="/books">Books</Link>
          <Route exact path="/" render={() => {
            return(
              <div>

              </div>
            )
          }}>

          </Route>
          <Route path="/books" component={Books} />
        </Router>
      </div>
    )
  }
}

export default App;
