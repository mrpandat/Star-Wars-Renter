import React, { PropTypes, Component } from 'react';
import styles from './CarShopList.module.scss';
import cssModules from 'react-css-modules';
import cutSentence from '../../utils/utils';

/**
 * This Class is the list of vehicles in the basket, and the total price
 */
class CarShopList extends Component {
  render() {
    const { cars } = this.props;
    let total = 0;
    return (
      <div>
        <ul>
          {cars.map((car, i) => {
            total += parseInt(car.cost_in_credits, 10);
            return (
              <li key={i}>
                    <span>
                      {(car.name.length > 20) ? cutSentence(car.name, 20) : car.name}
                    </span>
                <strong>&nbsp; {car.cost_in_credits}</strong>
              </li>
            );
          })}
        </ul>
        <p>
          <span>Total: <strong>{total}</strong></span>
        </p>
      </div>

    );
  }
}

CarShopList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default cssModules(CarShopList, styles);