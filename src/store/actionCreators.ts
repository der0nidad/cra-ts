import {
  AuthAction,
  DispatchType,
  IArticle,
  IUser,
  RemoveUserAction,
  UserEditAction,
} from "../type";
import actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
  const action: AuthAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: AuthAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: AuthAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export const addUserAction = (user: IUser) => {
  const action: UserEditAction = {
    type: actionTypes.ADD_USER,
    user,
  };
  return simulateHttpRequest(action);
};

export const editUserAction = (user: IUser) => {
  const action: UserEditAction = {
    type: actionTypes.EDIT_USER,
    user,
  };
  return simulateHttpRequest(action);
};

export const removeUserAction = (id: string) => {
  const action: RemoveUserAction = {
    type: actionTypes.REMOVE_USER,
    id,
  };
  return simulateHttpRequest(action);
};
