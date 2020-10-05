import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { IAuth } from "../type";

type Props = {};

export const LoginForm: React.FC<Props> = () => {
  const [authState, setAuthState] = React.useState<IAuth | {}>();

  const dispatch: Dispatch<any> = useDispatch();

  //   dispatc(loginUserAction(auth)
  const loginUser = React.useCallback((auth: IAuth) => console.log(auth), [
    dispatch,
  ]);

  const clickHandler = (e: React.SyntheticEvent): void => {
    // e.persist();
    console.log(authState);
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

  return (
    <div>
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
