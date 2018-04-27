import * as types from '../constants/carsShop';

const carsShop = (state = {
  cars: []
}, action) => {
  switch (action.type) {
    case types.ADD_CAR:
      return Object.assign({}, state, {
        cars: [
          ...state.cars,
          action.content
        ]
      });
    case types.REMOVE_CAR:
      const name = action.content.name;
      const cars = state.cars.filter((obj) => obj.name !== name);
      return Object.assign({}, state, { cars });

    default:
      return state;
  }
};


export default carsShop;
