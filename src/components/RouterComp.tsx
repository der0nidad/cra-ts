import { Container } from "@material-ui/core";
import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { NotFound } from "./NotFound";
import { Registration } from "./Registration";
import { User } from "./User";
import { UsersList } from "./UsersList";

type Props = {};

export const RouterComp: React.FC<Props> = () => {
  return (
    <Container maxWidth="md">
      <Router>
        <div>
          <nav>
            <Link className="router__link" to="/">
              Login
            </Link>
            <Link className="router__link" to="/user/1">
              User 1
            </Link>
            <Link className="router__link" to="/register">
              Register
            </Link>
            <Link className="router__link" to="/users">
              All users
            </Link>
            {/* <Link to="/bar">Bar</Link> */}
          </nav>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/user/:id" component={User} />
            {/* <Route exact path="/articles" component={Articles} /> */}
            <Route exact path="/register" component={Registration} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};
