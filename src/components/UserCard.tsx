import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { emptyString } from "../constants";
import { getSex } from "../helpers";
import { removeUserAction } from "../store/actionCreators";
import { IUser } from "../type";

type Props = {
  user: IUser;
};
export const UserCard: React.FC<Props> = ({ user }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const removeUser = React.useCallback(
    (id: string) => {
      dispatch(removeUserAction(id));
    },
    [dispatch]
  );
  const dateOfBirth = new Date(user.dateOfBirth);

  return (
    <div className="users-list__user-card">
      <Card>
        <CardHeader
          title={`ФИО: ${user.surname} ${user.name} ${user.patronymic}`}
        />
        <CardContent>
          <div className="users-list__row" key={user.id}>
            <Typography>{`email: ${user.email}`}</Typography>
            <Typography>{`Пол : ${
              getSex(user.sex) || emptyString
            }`}</Typography>
            <Typography>{`Дата рождения: ${
              dateOfBirth.toLocaleDateString("ru") || emptyString
            }`}</Typography>
            {/* <Button variant="contained" className="users-list__button">
              Редактировать
            </Button> */}
            <div className="users-list__button">
              <Button variant="outlined" onClick={() => removeUser(user.id)}>
                Удалить
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
