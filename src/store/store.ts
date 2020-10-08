import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import thunk from "redux-thunk";
import { AuthAction, DispatchType, RootState } from "../type";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
});
const composeEnhancers =
  typeof window === "object" &&
  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store: Store<RootState, AuthAction> & {
  dispatch: DispatchType;
} = createStore(rootReducer, enhancer);

export default store;
