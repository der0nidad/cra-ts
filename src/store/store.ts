import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const store: Store<AuthState, AuthAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));
