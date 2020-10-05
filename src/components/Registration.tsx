import { Container, Paper } from "@material-ui/core";
import * as React from "react";
import { UserEdit, UserEditButtonTextProp } from "./UserEdit";
type Props = {
  title: string;
  buttonText: "Регистрация" | "Сохранить";
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
export const Registration: React.FC<Props> = ({ title, buttonText }: Props) => {
  return (
    <div>
      <Container>
        <Paper>
          <UserEdit
            title="регистер"
            buttonText={UserEditButtonTextProp.register}
            isNewUser
          />
        </Paper>
      </Container>
    </div>
  );
};
