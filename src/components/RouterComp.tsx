import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Articles } from "./Articles";
import { LoginForm } from "./LoginForm";
import { NotFound } from "./NotFound";
import { User } from "./User";

type Props = {};

export const RouterComp: React.FC<Props> = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link className="router__link" to="/">
            Login
          </Link>
          <Link className="router__link" to="/user/1">
            User 1
          </Link>
          <Link className="router__link" to="/articles">
            Articles
          </Link>
          {/* <Link to="/bar">Bar</Link> */}
        </nav>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
