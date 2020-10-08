import { Container, Paper, Typography } from "@material-ui/core";
import * as React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { RootState } from "../type";
import { CurrentUser } from "./CurrentUser";
import { LoginForm } from "./LoginForm";
import { Logout } from "./Logout";
import { NotFound } from "./NotFound";
import { Registration } from "./Registration";
import { UsersList } from "./UsersList";

type Props = {};

// FIXME - fix any type
function PrivateRoute({ children, isAuthentificated, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthentificated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export const RouterComp: React.FC<Props> = () => {
  const currentUserId: string | undefined = useSelector((state: RootState) => {
    return state.users.currentUserId;
  });

  return (
    <Container maxWidth="md">
      <Router>
        <Paper>
          <div className="main-card">
            <Typography variant="h5">Куда отправимся?</Typography>
            <nav>
              {!currentUserId && (
                <Link className="router__link" to="/login">
                  Страница входа
                </Link>
              )}
              <Link className="router__link" to="/register">
                Регистрация
              </Link>
              <Link className="router__link" to="/users">
                Все пользователи
              </Link>
              <Link className="router__link" to="/me">
                Страница текущего пользователя
              </Link>
              {currentUserId && (
                <Link className="router__link" to="/logout">
                  Выйти
                </Link>
              )}
            </nav>
            <div className="main-card__content">
              <Switch>
                <PrivateRoute exact path="/" isAuthentificated={currentUserId}>
                  <CurrentUser />
                </PrivateRoute>
                <Route exact path="/login" component={LoginForm} />
                <PrivateRoute path="/me" isAuthentificated={currentUserId}>
                  <CurrentUser />
                </PrivateRoute>
                <PrivateRoute
                  exact
                  path="/users"
                  isAuthentificated={currentUserId}
                >
                  <UsersList />
                </PrivateRoute>
                {/* TODO add User component */}
                {/* <Route exact path="/user/:id" component={User} /> */}
                <Route exact path="/me" component={CurrentUser} />
                <Route exact path="/register" component={Registration} />
                <PrivateRoute
                  exact
                  path="/logout"
                  isAuthentificated={currentUserId}
                >
                  <Logout />
                </PrivateRoute>
                <Route exact path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Paper>
      </Router>
    </Container>
  );
};
