import { combineReducers } from 'redux';
import  loginReducer  from './loginReducer.js';
import studentsReducer from './studentsReducer.js';
import teacherReducer from './teachersReducer.js';
import commonlyUsedReducer from './commonlyUsedReducer.js';

const reducer = combineReducers({
  loginReducer,
  studentsReducer,
  teacherReducer,
  commonlyUsedReducer
})

export default reducer;
