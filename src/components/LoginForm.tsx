import { Button, Snackbar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { mainUrl, registerUrl } from "../constants";
import { loginUserAction } from "../store/actionCreators";
import { IAuth, IUser, RootState } from "../type";

type Props = {};

export const LoginForm: React.FC<Props> = () => {
  const [authState, setAuthState] = React.useState<IAuth | {}>();

  let history = useHistory();

  const users: IUser[] = useSelector((state: RootState) => state.users.users);

  const dispatch: Dispatch<any> = useDispatch();

  const loginUser = React.useCallback(
    (auth: IAuth) => {
      const handleClose = (e: React.SyntheticEvent, reason: string) => {
        if (reason === "clickaway") {
          return;
        }
        setAuthState({
          ...authState,
          errorNotification: null,
        });
      };
      try {
        dispatch(loginUserAction(auth, users));
        history.push(mainUrl);
      } catch (error) {
        const errorNotification = (
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open
            autoHideDuration={6000}
            onClose={handleClose}
            message={error.message}
          />
        );
        setAuthState({
          ...authState,
          errorNotification,
        });
      }
    },
    [dispatch, users, history, authState]
  );

  const clickHandler = (e: React.SyntheticEvent): void => {
    if (authState) {
      // TODO add validation
      loginUser(authState as IAuth);
    }
  };
  const handleLoginInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAuthState({
      ...authState,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <div className="login-form__card">
      {/* FIXME здесь точно существует лучший способ проверить, что authState - инстанс IAuth, а не {} */}
      {authState && (authState as IAuth).errorNotification}
      <Card>
        <CardHeader title="Вход в систему" />
        <CardContent>
          <div className="user-edit__form-field">
            <TextField
              id="login"
              label="Логин"
              variant="outlined"
              onChange={(e) => handleLoginInputChange(e)}
            />
          </div>
          <div className="user-edit__form-field">
            <TextField
              id="password"
              label="Пароль"
              variant="outlined"
              type="password"
              onChange={(e) => handleLoginInputChange(e)}
            />
          </div>
          <div className="user-edit-control-buttons">
            <Button variant="contained" color="primary" onClick={clickHandler}>
              Войти
            </Button>
            <Button variant="outlined" onClick={clickHandler}>
              <Link to={registerUrl}>Регистрация</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
