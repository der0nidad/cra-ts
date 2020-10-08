import {
  AuthAction,
  AuthState,
  DispatchType,
  IArticle,
  ILoginPayload,
  IUser,
  LoginSuccesAction,
  LogOutAction,
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
    dispatch({ type: actionTypes.LOADING_START });
    setTimeout(() => {
      dispatch(action);
      dispatch({ type: actionTypes.LOADING_FINISHED });
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

export const loginUserAction = (data: ILoginPayload, users: IUser[]) => (
  dispatch: Function,
  getState: () => AuthState
) => {
  const user = users.find((user) => user.login === data.login);
  let errorText = "";
  if (user) {
    if (data.password === user.password) {
      const action: LoginSuccesAction = {
        type: actionTypes.LOGIN_USER_FINISH,
        id: user.id,
        status: "success",
      };
      dispatch(simulateHttpRequest(action));
      return { id: user.id };
    } else {
      errorText = `Неверный пароль для пользователя ${data.login}`;
    }
  } else {
    errorText = `Пользователь с логином ${data.login} не зарегистрирован`;
  }
  throw new Error(errorText);
};

export const logoutUserAction = () => {
  const action: LogOutAction = {
    type: actionTypes.LOGOUT_USER,
  };
  return action;
};
