import { combineReducers } from 'redux';

// import reducers here
import carFeaturesReducer from './car-features';

export default combineReducers({
  // reducers here
  car: carFeaturesReducer
});
