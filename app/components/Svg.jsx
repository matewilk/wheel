import React from 'react';
import Wheel from './Wheel';

class SVG extends React.Component {
  render () {
    return (
      <svg viewBox='0 0 100 100'>
        <Wheel {...this.props} />
      </svg>
    );
  }
}

export default SVG;
