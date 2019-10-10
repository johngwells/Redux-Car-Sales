import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../redux/car-features/car-features.reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
