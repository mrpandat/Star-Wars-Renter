import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './RentButton.module.scss';

/**
 * This Class is the button of the CarBox. We can add/remove a vehicle of the CarShop
 * Because of this class.
 */
class RentButton extends Component {
  constructor() {
    super();
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.state = {
      rent: false
    };
  }

  handleAddItem() {
    const {
      addCar,
      content
    } = this.props;
    addCar(content);
    const state = this.state;
    state.rent = true;
    this.setState(state);
  }

  handleRemoveItem() {
    const {
      removeCar,
      content
    } = this.props;
    removeCar(content);
    const state = this.state;
    state.rent = false;
    this.setState(state);
  }

  // Choose the right button : if the vehicle is avalaible or not, and if it's rented or not.
  render() {
    const {
      content
    } = this.props;

    let button = (
      <button className={styles.button} onClick={this.handleAddItem}>
        Rent this
      </button>);

    if (this.state.rent) {
      button = (
        <button className={styles.button} onClick={this.handleRemoveItem}>
          Cancel rent
        </button>);
    }

    if (content.cost_in_credits === 'unknown') {
      button = (
        <button className={styles.unvalaibleButton}>
          Unvailable
        </button>
      );
    }
    return (<div>{button}</div>);
  }
}

RentButton.propTypes = {
  content: PropTypes.object.isRequired,
  addCar: PropTypes.func.isRequired,
  removeCar: PropTypes.func.isRequired
};

export default cssModules(RentButton, styles);
