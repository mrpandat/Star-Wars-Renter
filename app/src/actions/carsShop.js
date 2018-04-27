import * as types from '../constants/carsShop';

export const addCar = (content) => ({
  type: types.ADD_CAR,
  content
});

export const removeCar = (content) => ({
  type: types.REMOVE_CAR,
  content
});