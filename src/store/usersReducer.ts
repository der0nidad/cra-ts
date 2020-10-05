import { nanoid } from "nanoid";
import { AuthAction, AuthState, IUser, RemoveUserAction } from "../type";
import actionTypes from "./actionTypes";

const initialState: AuthState = {
  articles: [],
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  someUsers: [
    {
      id: "1",
      name: "user 1",
      email: "user1@example.com",
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
  }
  return state;
};

export const usersRemoveReducer = (
  state: AuthState = initialState,
  action: RemoveUserAction
): AuthState => {
  switch (action.type) {
    case actionTypes.REMOVE_USER:
      // console.log();
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.id
      );
      console.log(updatedUsers);
      return {
        ...state,
        users: updatedUsers,
      };
  }
  return state;
};
// export usersReducer;

// case actionTypes.ADD_USER:
//     const newUser: IUser = {
//       id: nanoid(),
//       name: action.
//     };
//     return {
//       ...state,
//       users: state.users.concat(newUser),
//     };
