interface IArticle {
  id: number;
  title: string;
  body: string;
}

type AuthState = {
  articles: IArticle[];
};

type AuthAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: AuthAction) => AuthAction;

interface RouterState {
  url: string;
}

type TParams = { id: string };
