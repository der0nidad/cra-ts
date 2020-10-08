import { Button, Snackbar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dispatch } from "redux";
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
      try {
        dispatch(loginUserAction(auth, users));
        history.push("/me");
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
    // .then((user) => {
    //   console.log(user);
    //   // TODO добавить редирект на страницу пользователя
    // })
    // .catch((error) => {
    //   console.log(error);
    //   // TODO добавить нотификашку и подкрашивание полей формы в error
    // }),
    [dispatch]
  );

  const clickHandler = (e: React.SyntheticEvent): void => {
    // e.persist();
    console.log(authState);
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

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthState(authState);
  };
  const handleClose = (e: React.SyntheticEvent, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setAuthState({
      ...authState,
      errorNotification: null,
    });
  };

  return (
    <div>
      {/* FIXME здесь точно существует лучший способ проверить, что authState - инстанс IAuth, а не {} */}
      {authState && (authState as IAuth).errorNotification}
      <Card>
        <CardHeader title="Вход в систему" />
        <CardContent>
          <div>
            <TextField
              id="login"
              label="Логин"
              variant="outlined"
              onChange={(e) => handleLoginInputChange(e)}
            />
          </div>
          <div>
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
              <Link to="/register">Регистрация</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
