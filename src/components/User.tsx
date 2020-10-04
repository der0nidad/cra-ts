import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { UserEdit } from "./UserEdit";

export const User = ({ match }: RouteComponentProps<TParams>) => {
  return (
    <div>
      <Paper>
        <Typography>Пользователь, опа. твой id {match.params.id}</Typography>
        <UserEdit
          title="Редактироование"
          buttonText="Сохранить"
          user={{
            id: 1,
            name: "nameeee",
            email: "email, eee",
            surname: "jug",
          }}
        />
        <Button variant="outlined">Выйти</Button>
      </Paper>
    </div>
  );
};
