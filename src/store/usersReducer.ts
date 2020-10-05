import { nanoid } from "nanoid";
import * as actionTypes from "./actionTypes";

const initialState: AuthState = {
  articles: [],
  users: [
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
const usersReducer = (
  state: AuthState = initialState,
  action: UserEditAction
): AuthState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      console.log(action);
      const newUser: IUser = {
        id: nanoid(), // not really unique
        name: action.user.name,
        email: action.user.email,
      };
      console.log(newUser);
      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case actionTypes.REMOVE_USER:
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.user.id
      );
      console.log(state.users);
      return {
        ...state,
        users: updatedUsers,
      };
  }
  return state;
};

export default usersReducer;

// case actionTypes.ADD_USER:
//     const newUser: IUser = {
//       id: nanoid(),
//       name: action.
//     };
//     return {
//       ...state,
//       users: state.users.concat(newUser),
//     };
