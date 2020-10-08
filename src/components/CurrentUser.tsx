import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { IUserOptional, RootState } from "../type";
import { UserEdit, UserEditButtonTextProp } from "./UserEdit";

const noDataLayout = (
  <div>
    <Paper>
      <Typography>Нет данных о пользователе. Произошла ошибка</Typography>
    </Paper>
  </div>
);

export const CurrentUser = () => {
  const currentUserData: IUserOptional = useSelector((state: RootState) => {
    return state.users.users.find(
      (user) => user.id === state.users.currentUserId
    );
  });

  if (!currentUserData) {
    return noDataLayout;
  }
  return (
    <div>
      <Paper>
        <UserEdit
          title="Редактирование"
          buttonText={UserEditButtonTextProp.save}
          user={currentUserData}
          isNewUser={false}
        />
      </Paper>
    </div>
  );
};
