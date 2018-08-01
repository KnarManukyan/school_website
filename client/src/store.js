import reducer from './reducers/reducer.js';
import {createStore, applyMiddleware} from "redux"

import logger from 'redux-logger';
const store = createStore(reducer, {}, applyMiddleware(logger)
);
export default store;
