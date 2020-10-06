import actionTypes from "./store/actionTypes";
import { rootReducer } from "./store/store";

export interface IArticle {
  id: number;
  title: string;
  body: string;
}

export interface IAuth {
  id?: number;
  login: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  surname?: string;
  patronymic?: string;
  email: string;
  sex?: 0 | 1;
  dateOfBirth?: string;
  //  мб вынести в отдельный интерфейс
  login?: string;
  password?: string;
}

export type IUserOptional = IUser | undefined;

export interface RouterState {
  url: string;
}
export type AuthState = {
  articles: IArticle[];
  users: IUser[];
  currentUserId?: string;
  someUsers?: IUser[];
  loading?: boolean;
};

export interface ILoginPayload {
  login: string;
  password: string;
}
export type ArticleAction = {
  type: actionTypes.ADD_ARTICLE | actionTypes.REMOVE_ARTICLE;
  article: IArticle;
};

export type UserEditAction = {
  type: actionTypes.ADD_USER | actionTypes.EDIT_USER;
  user: IUser;
};

export type RemoveUserAction = {
  type: actionTypes.REMOVE_USER;
  id: string;
};

export type LoadingStartAction = {
  type: actionTypes.LOADING_START;
};

export type LoadingFinishAction = {
  type: actionTypes.LOADING_FINISHED;
};

export type LoginSuccesAction = {
  type: actionTypes.LOGIN_USER_FINISH;
  id: string;
  status: "success";
};

export type LoginFailAction = {
  type: actionTypes.LOGIN_USER_FAIL;
  error: string;
  status: "error";
};

export type AuthAction =
  | ArticleAction
  | UserEditAction
  | RemoveUserAction
  | LoadingStartAction
  | LoadingFinishAction
  | LoginSuccesAction
  | LoginFailAction;

export type DispatchType = (args: AuthAction) => AuthAction;

export type TParams = { id: string };

export type RootState = ReturnType<typeof rootReducer>;
