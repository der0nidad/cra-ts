import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { AuthAction, DispatchType, RootState } from "../type";
import { usersReducer, usersRemoveReducer } from "./usersReducer";

// TODO add combinereducers
export const rootReducer = combineReducers({
  users: usersReducer,
  usersRemove: usersRemoveReducer,
});

const store: Store<RootState, AuthAction> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

export default store;
