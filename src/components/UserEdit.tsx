// поля: id, фио, пол, дата рождения, email
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addUserAction } from "../store/actionCreators";
import { IUser } from "../type";

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
  actionCallback?: Function;
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
  actionCallback,
  user,
  isNewUser,
}: Props) => {
  const [userState, setUserState] = React.useState<IUser | {}>();

  const dispatch: Dispatch<any> = useDispatch();

  const clickHandler = (e: React.SyntheticEvent): void => {
    console.log(userState);
    // add valdation
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
    (user: IUser) => {
      // добавляем проверку - если пользователь новый - создаем, иначе редактируем
      return dispatch(addUserAction(user));
    },
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
  title: UserEditTitleProp.register,
  buttonText: UserEditButtonTextProp.register,
  isNewUser: true,
};
