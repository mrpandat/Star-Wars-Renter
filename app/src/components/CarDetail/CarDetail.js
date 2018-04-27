import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './CarDetail.module.scss';

/**
 * This class is the list of propriety of a vehicle.
 * It only appears when it's on detail mode.
 */
class CarDetail extends Component {

  render() {
    const { car } = this.props;
    return (
      <div className={styles.proprieties}>
        <div className={styles.propriety}><p>Max Speed: {car.max_atmosphering_speed}</p></div>
        <div className={styles.propriety}><p>Crew: {car.crew}</p></div>
        <div className={styles.propriety}><p>Length: {car.length}</p></div>
        <div className={styles.propriety}><p>Cargo capacity: {car.cargo_capacity}</p></div>
        {(car.consumables === "unknown") ? ""
          : <div className={styles.propriety}><p>Consumables: {car.consumables}</p></div>}
      </div>
    );
  }
}

CarDetail.propTypes = {
  car: PropTypes.object.isRequired
};

export default cssModules(CarDetail, styles);
