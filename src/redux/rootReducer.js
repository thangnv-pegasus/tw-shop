import { combineReducers } from "redux";

import counterReducer from "~/redux/counter/counter.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
