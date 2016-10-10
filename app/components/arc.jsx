import React from 'react';
import * as d3 from 'd3';

class Arc extends React.Component {
  generateArc () {
    let arc = d3.arc();
    let path = arc({
      innerRadius: 0,
      outerRadius: 50,
      startAngle: 0,
      endAngle: Math.PI * 1.5
    });

    return path;
  }

  render () {
    let path = this.generateArc();
    let rotation = this.props.rotation;

    let transorm = `translate(50, 50) rotate(${rotation.toString()})`;
    return (
      <path d={path} transform={transorm} />
    );
  }
}

export default Arc;
