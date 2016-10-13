import React from 'react';
import Arc from './Arc';

class Wheel extends React.Component {
  render () {
    return (
      <div className='wheel'>
        <svg viewBox='0 0 100 100'>
          <Arc {...this.props} />
        </svg>
      </div>
    );
  }
}

export default Wheel;
