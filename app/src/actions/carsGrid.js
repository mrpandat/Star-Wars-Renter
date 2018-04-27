import * as types from '../constants/carsGrid';

export const receiveCars = (json) => ({
  type: types.RECEIVE_CARS,
  cars: json.results.map(child => child)
});


export const requestCars = () => ({
  type: types.REQUEST_CARS
});

export function getAllCars() {
  return dispatch => {
    dispatch(requestCars());
    return fetch('http://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(json => dispatch(receiveCars(json)));
  };
}