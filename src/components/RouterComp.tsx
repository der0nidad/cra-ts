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
import {
  currentUserUrl,
  loginUrl,
  logoutUrl,
  mainUrl,
  registerUrl,
  usersUrl,
} from "../constants";
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
              pathname: loginUrl,
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
                <Link className="router__link" to={loginUrl}>
                  Страница входа
                </Link>
              )}
              <Link className="router__link" to={registerUrl}>
                Регистрация
              </Link>
              <Link className="router__link" to={usersUrl}>
                Все пользователи
              </Link>
              <Link className="router__link" to={currentUserUrl}>
                Страница текущего пользователя
              </Link>
              {currentUserId && (
                <Link className="router__link" to={logoutUrl}>
                  Выйти
                </Link>
              )}
            </nav>
            <div className="main-card__content">
              <Switch>
                <PrivateRoute
                  exact
                  path={mainUrl}
                  isAuthentificated={currentUserId}
                >
                  <CurrentUser />
                </PrivateRoute>
                <Route exact path={loginUrl} component={LoginForm} />
                <PrivateRoute
                  path={currentUserUrl}
                  isAuthentificated={currentUserId}
                >
                  <CurrentUser />
                </PrivateRoute>
                <PrivateRoute
                  exact
                  path={usersUrl}
                  isAuthentificated={currentUserId}
                >
                  <UsersList />
                </PrivateRoute>
                {/* TODO add User component */}
                {/* <Route exact path="/user/:id" component={User} /> */}
                <Route exact path={currentUserUrl} component={CurrentUser} />
                <Route exact path={registerUrl} component={Registration} />
                <PrivateRoute
                  exact
                  path={logoutUrl}
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
