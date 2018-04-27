import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

// Import the various reducers here:
import carsGrid from './carsGrid';
import carsShop from './carsShop';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  carsGrid,
  carsShop,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
