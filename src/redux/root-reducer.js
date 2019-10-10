import { combineReducers } from 'redux';

// import reducers here
import useReducer from './car-features/car-features.reducer';

export default combineReducers({
  // reducers here
  car: useReducer
});
