import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './CarThumb.module.scss';
import CarDetail from '../CarDetail/CarDetail';
import cutSentence from '../../utils/utils';

/**
 * This class is what you see on the car box
 */
class CarThumb extends Component {
  render() {
    const {
      content,
      detail
    } = this.props;
    // Get the right name of the picture by symplifing the name of the car.
    const imageName = content.name.replace('-', '').replace(/ /g, '_').replace('/', '') + '.jpg';

    // Apply a specific class if it is on detail mode
    let detailClass = styles.noDetails;
    if (detail) detailClass = styles.fullDetails;

    // If the price is unknown, display nothing
    // Cut the name to 20 words
    return (
      <div className={styles.thumb}>
        <div className={styles.boxDesc}>
          <p className={styles.carName}>
            {(content.name.length > 20) ? cutSentence(content.name, 20) : content.name}</p>
          {content.cost_in_credits === "unknown" ? "" :
            <p className={styles.price}> {content.cost_in_credits + " CG"} </p>}
          <p className={styles.price}>Passengers: {content.passengers}</p>
          <p className={styles.price}>By {content.manufacturer}</p>
          <div className={detailClass}>
              <CarDetail car={content}/>
            </div>
        </div>
        <img
          className={styles.boxImage}
          src={require('../../../assets/images/' + imageName)}
        />
      </div>
    );
  }
}

CarThumb.propTypes = {
  content: PropTypes.object.isRequired,
  detail: PropTypes.bool.isRequired
};

export default cssModules(CarThumb, styles);
