import React, { PropTypes, Component } from 'react';
import styles from './CarsGrid.module.scss';
import CarBox from '../CarBox/CarBox';
import cssModules from 'react-css-modules';

class CarsGrid extends Component {
  render() {
    const { cars, addCar, removeCar } = this.props;
    return (
      <div className={styles.fullScreen}>
        <h1 className={styles.sectionHeader}>Rent the car of your neighbors :)</h1>
        <div className={styles.flex}>
          {!cars.length &&
            <div>
              <img src={require('../../../assets/gif/loading.gif')} />
              <p>Loading.....</p>
            </div>
          }
          {cars.map((box, i) =>
            <CarBox
              key={i}
              id={i}
              content={box}
              addCar={addCar}
              removeCar={removeCar}
            />
          )}
          </div>
      </div>
    );
  }
}

CarsGrid.propTypes = {
  cars: PropTypes.array.isRequired,
  addCar: PropTypes.func.isRequired,
  removeCar: PropTypes.func.isRequired
};

export default cssModules(CarsGrid, styles);