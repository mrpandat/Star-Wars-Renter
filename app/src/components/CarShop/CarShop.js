import React, { PropTypes, Component } from 'react';
import styles from './CarShop.module.scss';
import cssModules from 'react-css-modules';
import CarShopList from '../CarShopList/CarShopList';

class CarShop extends Component {
  render() {
    const { cars } = this.props;
    return (
      <section className={styles.shop} id="content">
        <details className={styles.shoppingCart}>
          <summary>
            <h4>Shopping cart</h4>
          </summary>
          <CarShopList cars={cars} />
          <a className={styles.checkout}>Checkout</a>
        </details>
      </section>
    );
  }
}

CarShop.propTypes = {
  cars: PropTypes.array.isRequired
};

export default cssModules(CarShop, styles);