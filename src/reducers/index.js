// Root reducers (nơi để chứa reducer chính)
import { combineReducers } from "redux";
import taskReducer from "./task.reducer";

const rootReducers = combineReducers({
  //taskReducer: taskReducer,
  taskReducer,
});

export default rootReducers;
