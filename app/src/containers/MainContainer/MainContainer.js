import React, { PropTypes, Component } from 'react';
import { CarsGrid, CarShop } from 'components';
import styles from './MainContainer.module.scss';
import * as ActionsCreatorGrid from '../../actions/carsGrid';
import * as ActionsCreatorShop from '../../actions/carsShop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';


// Containers are used for managing state.
// Whenever possible, write components as stateless functional
// components and use classes for stateful containers.
// There is also likely too much state here.  The form
// Input elements can be managed by redux form, for example.
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.getAllCars = this.getAllCars.bind(this);
  }

  componentDidMount() {
    this.getAllCars();
  }

  getAllCars() {
    const { actions } = this.props;
    actions.getAllCars();
  }

  handleAddItem(content) {
    const {
      actions
    } = this.props;
    actions.addCar(content);
  }
  handleRemoveItem(id) {
    const {
      actions
    } = this.props;
    actions.removeCar(id);
  }
  render() {
    const {
      cars,
      shop
    } = this.props;
    return (
      <div>
        <div>
          <CarShop cars={shop} />
        </div>
        <div className={styles.red}>
          <h1 className={styles.bigTitle}>My star wars renter</h1>
          <CarsGrid
            cars={cars}
            removeCar={this.handleRemoveItem}
            addCar={this.handleAddItem}
            getAllCars={this.getAllCars}
          />
        </div>
      </div>

    );
  }
}

MainContainer.propTypes = {
  cars: PropTypes.array.isRequired,
  shop: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Standard React-Redux Magic to connect your state to local props
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
const mapStateToProps = (state) => ({
  cars: state.carsGrid.cars,
  shop: state.carsShop.cars
});

// More connected component magic
// https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(ActionsCreatorGrid, ActionsCreatorShop), dispatch)
});

// CSS Module magic to connect the hashed selectors
// https://github.com/gajus/react-css-modules
const StyledComponent = cssModules(MainContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
