import * as actionTypes from "./actionTypes";

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
