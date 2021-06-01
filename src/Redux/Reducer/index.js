import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { authReducer } from "./auth.reducer";
import { todoReducer } from "./todo.reducer";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  todoReducer,
});

export default rootReducer;
