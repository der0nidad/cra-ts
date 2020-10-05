import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";

// TODO add combinereducers
// const rootReducer = combineReducers({ users: usersReducer });

const store: Store<AuthState, AuthAction> & {
  dispatch: DispatchType;
} = createStore(usersReducer, applyMiddleware(thunk));

export default store;
