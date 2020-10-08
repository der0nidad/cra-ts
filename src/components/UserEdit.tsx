// поля: id, фио, пол, дата рождения, email
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { addUserAction, editUserAction } from "../store/actionCreators";
import { IUser, RootState } from "../type";

export enum UserEditButtonTextProp {
  register = "Регистрация",
  save = "Сохранить",
}
export enum UserEditTitleProp {
  register = "Регистрация нового пользователя",
  save = "Редактирование данных пользователя",
}
type Props = {
  title: UserEditTitleProp | string;
  // TODO выпилить buttonText из пропсов - сделать внутренней константой и
  // выбирать по пропсу isNewUser
  buttonText: UserEditButtonTextProp;
  user?: IUser;
  isNewUser: boolean;
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
  user,
  isNewUser,
}: Props) => {
  const [userState, setUserState] = React.useState<IUser | {}>();

  const users: readonly IUser[] = useSelector((state: RootState) => {
    return state.users.users;
  });

  const dispatch: Dispatch<any> = useDispatch();

  let history = useHistory();
  const clickHandler = (e: React.SyntheticEvent): void => {
    console.log(userState);
    // add validation
    const userData = { ...user, ...userState };
    saveUser(userData as IUser);
    history.push("/me");
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
    (user: IUser) => {
      if (isNewUser) {
        // проверяем, что пользователя с данным логином нет
        if (users.find((existingUser) => user.login === existingUser.login)) {
          // TODO add notification "Логин занят"
          console.log("Логин занят");
        } else {
          return dispatch(addUserAction(user));
        }
      } else {
        return dispatch(editUserAction(user));
      }
    },
    [dispatch]
  );
  return (
    <div className="user-edit">
      <Typography>{title}</Typography>
      <div className="user-edit-fields">
        <div className="user-edit__form-field">
          <TextField
            id="login"
            label="Логин"
            defaultValue={user?.login}
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-edit__form-field">
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-edit__form-field">
          <TextField
            id="password-verify"
            label="Повторите пароль"
            variant="outlined"
            type="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-edit__form-field">
          <TextField
            id="surname"
            label="Фамилия"
            variant="outlined"
            defaultValue={user?.surname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-edit__form-field">
          <TextField
            id="name"
            label="Имя"
            variant="outlined"
            defaultValue={user?.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-edit__form-field">
          <TextField
            id="patronymic"
            label="Отчество"
            defaultValue={user?.patronymic}
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-edit__form-field">
          <TextField
            id="email"
            label="Email"
            defaultValue={user?.email}
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <Button variant="contained" color="primary" onClick={clickHandler}>
        {buttonText}
      </Button>
    </div>
  );
};

UserEdit.defaultProps = {
  title: UserEditTitleProp.register,
  buttonText: UserEditButtonTextProp.register,
  isNewUser: true,
};
