import { combineReducers } from 'redux';
import  loginReducer  from './loginReducer.js';
import studentsReducer from './studentsReducer.js';
import teachersReducer from './teachersReducer.js';
import classesReducer from './classesReducer.js';
import commonlyUsedReducer from './commonlyUsedReducer.js';

const reducer = combineReducers({
  loginReducer,
  studentsReducer,
  teachersReducer,
  classesReducer,
  commonlyUsedReducer
})

export default reducer;
