import * as types from '../constants/carsGrid';

const carsGrid = (state = {
  cars: []
}, action) => {
  switch (action.type) {
    case types.RECEIVE_CARS:
      return Object.assign({}, state, {
        // isFetching: false,
        cars: action.cars
      });
    default:
      return state;
  }
};

export default carsGrid;
