import { nanoid } from "nanoid";
import { AuthAction, AuthState, IUser } from "../type";
import actionTypes from "./actionTypes";

const initialState: AuthState = {
  articles: [],
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  // someUsers: [
  //   {
  //     id: "1",
  //     name: "user 1",
  //     email: "user1@example.com",
  //     login: "a",
  //     password: "a",
  //   },
  //   {
  //     id: "2",
  //     name: "user 2",
  //     email: "user2@example.com",
  //   },
  // ],
  currentUserId: localStorage.getItem("currentUserId") || undefined,
};
export const usersReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADING_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_USER:
      const newId = nanoid();
      const newUser: IUser = {
        id: newId,
        name: action.user.name,
        email: action.user.email,
        surname: action.user.surname,
        patronymic: action.user.patronymic,
        login: action.user.login,
        password: action.user.password,
      };
      localStorage.setItem(
        "users",
        JSON.stringify(state.users.concat(newUser))
      );
      localStorage.setItem("currentUserId", newId);
      return {
        ...state,
        users: state.users.concat(newUser),
        currentUserId: newId,
      };
    case actionTypes.EDIT_USER:
      console.log(action);
      const usersUpdated = state.users.map((user) => {
        if (user.id === action.user.id) {
          return { ...user, ...action.user };
        }
        return user;
      });
      localStorage.setItem(
        "users",
        JSON.stringify(state.users.concat(usersUpdated))
      );
      return {
        ...state,
        users: usersUpdated,
      };
    case actionTypes.REMOVE_USER:
      // TODO добавь обработку кейса удаления текущего пользователя
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.id
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    case actionTypes.LOGIN_USER_FINISH:
      localStorage.setItem("currentUserId", action.id);
      return {
        ...state,
        currentUserId: action.id,
      };
    case actionTypes.LOGOUT_USER:
      localStorage.removeItem("currentUserId");
      console.log("logout");
      console.log({
        ...state,
        currentUserId: undefined,
      });
      for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i) || ""));
      }
      return {
        ...state,
        currentUserId: undefined,
      };
  }
  return state;
};
