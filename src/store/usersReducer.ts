import { nanoid } from "nanoid";
import { AuthAction, AuthState, IUser } from "../type";
import actionTypes from "./actionTypes";

const initialState: AuthState = {
  articles: [],
  someUsers: JSON.parse(localStorage.getItem("users") || "[]"),
  users: [
    {
      id: "1",
      name: "user 1",
      email: "user1@example.com",
      login: "a",
      password: "a",
    },
    {
      id: "2",
      name: "user 2",
      email: "user2@example.com",
    },
  ],
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
    case actionTypes.ADD_USER:
      console.log(action);
      const newUser: IUser = {
        id: nanoid(),
        name: action.user.name,
        email: action.user.email,
      };
      console.log(newUser);
      localStorage.setItem(
        "users",
        JSON.stringify(state.users.concat(newUser))
      );
      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case actionTypes.REMOVE_USER:
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.id
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    case actionTypes.LOGIN_USER_FINISH:
      return {
        ...state,
        currentUserId: action.id,
      };
  }
  return state;
};
