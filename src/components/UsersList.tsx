import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { removeUserAction } from "../store/actionCreators";
import { IUser, RootState } from "../type";

export const UsersList: React.FC = () => {
  const users: readonly IUser[] = useSelector((state: RootState) => {
    console.log(state);
    return state.users.users;
  });

  const dispatch: Dispatch<any> = useDispatch();

  const removeUser = React.useCallback(
    (id: string) => {
      dispatch(removeUserAction(id));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>All registered users</h1>
      {users.map((user: IUser) => (
        <div className="users-list__row" key={user.id}>
          <span>
            {`Пользователь id: ${user.id}, Имя: ${user.name}, email: ${user.email}`}
          </span>
          <button className="users-list__button">Редактировать</button>
          <button
            className="users-list__button"
            onClick={() => removeUser(user.id)}
          >
            Удалить
          </button>
        </div>
      ))}
    </main>
  );
};
