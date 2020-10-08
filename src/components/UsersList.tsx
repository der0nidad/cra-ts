import { Typography } from "@material-ui/core";
import * as React from "react";
import { useSelector } from "react-redux";
import { IUser, RootState } from "../type";
import { UserCard } from "./UserCard";

export const UsersList: React.FC = () => {
  const users: readonly IUser[] = useSelector((state: RootState) => {
    return state.users.users;
  });
  console.log(users);

  return (
    <div>
      <Typography variant="h5">Пользователи:</Typography>
      {users.map((user: IUser) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};
