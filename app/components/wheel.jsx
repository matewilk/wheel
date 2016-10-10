import React from 'react';
import Arc from './arc';

class Wheel extends React.Component {
  render () {
    return (
      <div className='wheel'>
        <svg viewBox='0 0 100 100'>
          <Arc rotation={this.props.rotation} />
        </svg>
      </div>
    );
  }
}

export default Wheel;
