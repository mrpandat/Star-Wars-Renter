import React from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
// Example to import a component using ES6 destructuring.
import { MainContainer } from '../../containers';

// Pages map directly to Routes, i.e. one page equals on Route
// Handler that maps to a route in /utils/routes
const LandingPage = (props) => (
  <div className={styles.container}>
    <MainContainer
      {...props}
    />
  </div>
);

export default cssModules(LandingPage, styles);
