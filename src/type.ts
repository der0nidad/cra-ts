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
};

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

export type AuthAction = ArticleAction | UserEditAction | RemoveUserAction;

export type DispatchType = (args: AuthAction) => AuthAction;

export type TParams = { id: string };

export type RootState = ReturnType<typeof rootReducer>;
