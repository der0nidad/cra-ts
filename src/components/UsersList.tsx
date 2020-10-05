import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

export const UsersList: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: AuthState) => state.users,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <main>
      <h1>All registered users</h1>
      {users.map((user: IUser) => (
        <div className="users-list__row">
          <span key={user.id}>
            {`Пользователь id: ${user.id}, Имя: ${user.name}, email: ${user.email}`}
          </span>
          <button className="users-list__button">Редактировать</button>
          <button className="users-list__button">Удалить</button>
        </div>
      ))}
    </main>
  );
};
