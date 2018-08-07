import { combineReducers } from 'redux';
import  loginReducer  from './loginReducer.js';
import studentsReducer from './studentsReducer.js';
import commonlyUsedReducer from './commonlyUsedReducer.js';
const reducer = combineReducers({
  loginReducer,
  studentsReducer,
  commonlyUsedReducer
})

export default reducer;
