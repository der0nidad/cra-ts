interface IArticle {
  id: number;
  title: string;
  body: string;
}

interface IAuth {
  id?: number;
  login: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  surname?: string;
  patronymic?: string;
  email: string;
  sex?: 0 | 1;
  dateOfBirth?: string;
}

interface RouterState {
  url: string;
}
type AuthState = {
  articles: IArticle[];
  users: IUser[];
  currentUser?: IUser;
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type UserEditAction = {
  type: string;
  user: IUser;
};

type AuthAction = ArticleAction | UserEditAction;

type DispatchType = (args: AuthAction) => AuthAction;

type TParams = { id: string };
