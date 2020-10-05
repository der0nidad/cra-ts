// поля: id, фио, пол, дата рождения, email
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addUserAction } from "../store/actionCreators";

type Props = {
  title: string;
  buttonText: "Регистрация" | "Сохранить";
  actionCallback?: Function;
  user?: IUser;
};
// interface IUser {
//     id: number;
//     name: string;
//     surname?: string;
//     patronymic?: string;
//     email: string;
//     sex?: 0 | 1;
//     dateOfBirth?: string;
//   }
export const UserEdit: React.FC<Props> = ({
  title,
  buttonText,
  actionCallback,
  user,
}: Props) => {
  const [userState, setUserState] = React.useState<IUser | {}>();

  const dispatch: Dispatch<any> = useDispatch();

  const clickHandler = (e: React.SyntheticEvent): void => {
    // e.persist();
    console.log(userState);
    // add valdation
    console.log(typeof userState);
    saveUser(userState as IUser);
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserState({
      ...userState,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const saveUser = React.useCallback(
    (user: IUser) => dispatch(addUserAction(user)),
    [dispatch]
  );
  return (
    <div className="user-edit">
      {/* <CardHeader title={title} /> */}
      {/* <CardContent> */}
      <Typography>{title}</Typography>
      <div className="user-edit-fields">
        <TextField
          id="login"
          label="Логин"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          id="password"
          label="Пароль"
          variant="outlined"
          type="password"
          onChange={(e) => handleInputChange(e)}
        />
        {/* </div> */}
        {/* <div> */}
        <TextField
          id="surname"
          label="Фамилия"
          variant="outlined"
          defaultValue={user?.surname}
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          id="name"
          label="Имя"
          variant="outlined"
          defaultValue={user?.name}
          onChange={(e) => handleInputChange(e)}
        />
        {/* </div> */}
        {/* <div> */}
        <TextField
          id="patronymic"
          label="Отчество"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <Button variant="contained" color="primary" onClick={clickHandler}>
        {buttonText}
      </Button>
      {/* </CardContent> */}
    </div>
  );
};

UserEdit.defaultProps = {
  title: "регистрация -45",
  buttonText: "Регистрация",
};
