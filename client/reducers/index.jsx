import { combineReducers } from 'redux';
import fuelSavings from '../fuelsavings/reducer';

function noop(state) {
  return state || {};
}

const rootReducer = combineReducers({
  fuelSavings,
  data: noop,
  count: noop,
  skip: noop
});

export default rootReducer;
