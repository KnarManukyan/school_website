import reducer from './reducers';
import {createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const store = createStore(reducer, {}, applyMiddleware( thunk));
export default store;
