import { nanoid } from "nanoid";
import { AuthAction, AuthState, IUser } from "../type";
import actionTypes from "./actionTypes";

const initialState: AuthState = {
  articles: [],
  users: JSON.parse(localStorage.getItem("users") || "[]"),
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
        ...action.user,
        id: newId,
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
      const usersUpdated = state.users.map((user) => {
        if (user.id === action.user.id) {
          return { ...user, ...action.user };
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(usersUpdated));
      return {
        ...state,
        users: usersUpdated,
      };
    case actionTypes.REMOVE_USER:
      let newCurrUserId = state.currentUserId;
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.id
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      // обрабатываем кейс удаления текущего пользователя
      if (action.id === state.currentUserId) {
        localStorage.removeItem("currentUserId");
        newCurrUserId = undefined;
      }
      return {
        ...state,
        users: updatedUsers,
        currentUserId: newCurrUserId,
      };
    case actionTypes.LOGIN_USER_FINISH:
      localStorage.setItem("currentUserId", action.id);
      return {
        ...state,
        currentUserId: action.id,
      };
    case actionTypes.LOGOUT_USER:
      localStorage.removeItem("currentUserId");
      return {
        ...state,
        currentUserId: undefined,
      };
  }
  return state;
};
