import React, { PropTypes } from 'react';

const Main = (props) => (
  <div>
    {React.cloneElement(props.children, props)}
  </div>
);

Main.propTypes = {
  children: PropTypes.any
};

export default Main;
