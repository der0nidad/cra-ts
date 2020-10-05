import { ArticleAction, AuthState, IArticle } from "../type";
import actionTypes from "./actionTypes";

const initialState: AuthState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
  users: [],
};
const reducer = (
  state: AuthState = initialState,
  action: ArticleAction
): AuthState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(), // not really unique
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;

// case actionTypes.ADD_USER:
//     const newUser: IUser = {
//       id: nanoid(),
//       name: action.
//     };
//     return {
//       ...state,
//       users: state.users.concat(newUser),
//     };
