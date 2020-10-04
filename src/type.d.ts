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
  id: number;
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
};

type AuthAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: AuthAction) => AuthAction;

type TParams = { id: string };
