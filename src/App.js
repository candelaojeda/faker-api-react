import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Books from "./components/Books";
import Users from "./components/Users";
import CreditCards from "./components/CreditCards";

export default function App() {
  return (
    <div className="app">
      <Router>
        <div className="navigation">
          <Link className="link-nav" to="/">
            HOME
          </Link>
          <Link className="link-nav" to="/books">
            BOOKS
          </Link>
          <Link className="link-nav" to="/users">
            USERS
          </Link>
          <Link className="link-nav" to="/credit-cards">
            CREDIT-CARDS
          </Link>
        </div>

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
        <Route path="/credit-cards" component={CreditCards} />
      </Router>
    </div>
  );
}
