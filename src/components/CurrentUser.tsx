import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IUserOptional, RootState, TParams } from "../type";
import { UserEdit, UserEditButtonTextProp } from "./UserEdit";

const noDataLayout = (
  <div>
    <Paper>
      <Typography>Нет данных о пользователе. Произошла ошибка</Typography>
    </Paper>
  </div>
);

export const CurrentUser = ({ match }: RouteComponentProps<TParams>) => {
  const currentUserData: IUserOptional = useSelector((state: RootState) => {
    console.log(state);
    return state.users.users.find(
      (user) => user.id === state.users.currentUserId
    );
  });
  console.log(currentUserData);
  if (!currentUserData) {
    return noDataLayout;
  }
  return (
    <div>
      <Paper>
        <Typography>Пользователь, опа. твой id {match.params.id}</Typography>
        <UserEdit
          title="Редактироование"
          buttonText={UserEditButtonTextProp.save}
          user={{
            id: "1",
            name: "nameeee",
            email: "email, eee",
            surname: "jug",
          }}
          isNewUser={false}
        />
        <Button variant="outlined">Выйти</Button>
      </Paper>
    </div>
  );
};
