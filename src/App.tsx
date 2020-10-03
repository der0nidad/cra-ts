import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RouterComp } from "./components/RouterComp";
import { addArticle } from "./store/actionCreators";
import "./styles.css";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: AuthState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <RouterComp />
    </main>
  );
};

export default App;
