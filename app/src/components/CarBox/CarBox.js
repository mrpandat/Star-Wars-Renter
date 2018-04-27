import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './CarBox.module.scss';
import CarThumb from '../CarThumb/CarThumb';
import RentButton from '../RentButton/RentButton';

class CarBox extends Component {
  constructor() {
    super();
    this.state = {
      detail: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const state = this.state;
    state.detail = !state.detail;
    this.setState(state);
  }

  render() {
    const { detail } = this.state;
    const { addCar, removeCar, id, content } = this.props;
    // Choose between zoom images
    let zoomIcon = (<img src={require("../../../assets/icons/zoom_in.png")}/>);
    if (detail) zoomIcon = (<img src={require("../../../assets/icons/zoom_out.png")}/>);
    return (
      <div className={styles.box} id={`box-item-${id}`} >
          <div className={styles.zoom} onClick={this.handleClick} >
            {zoomIcon}
          </div>
          <CarThumb detail={detail} content={content}/>
        <RentButton addCar={addCar} removeCar={removeCar} content={content}/>
      </div>
    );
  }
}

CarBox.propTypes = {
  content: PropTypes.object.isRequired,
  addCar: PropTypes.func.isRequired,
  removeCar: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default cssModules(CarBox, styles);
