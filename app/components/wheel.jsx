import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import * as d3 from 'd3';

import Sector from './Sector';

class Wheel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      padAngle: 0.005
    };

    this.pie = d3.pie()
      .value(function (d) { return d.count; })
      .padAngle(this.state.padAngle)
      .sort(null);

    this.arc = d3.arc()
      .outerRadius(45)
      .innerRadius(20)
      .cornerRadius(1);
  }

  componentDidMount () {
    this.color = d3.scaleOrdinal([
      '#E53935',
      '#D81B60',
      '#8E24AA',
      '#5E35B1',
      '#3949AB',
      '#1E88E5',
      '#039BE5',
      '#00ACC1',
      '#00897B',
      '#43A047'
    ]);
  }

  render () {
    let rotation = this.props.message.data || 0;

    let transform = `translate(50, 50) rotate(${rotation.toString()})`;
    return (
      <g transform={transform}>
        <ReactTransitionGroup component='g' >
          {this.pie(this.props.data).map((d, i) => {
            // calculate labels position
            let midAngle = d.startAngle / 2 + d.endAngle / 2;
            let center = `translate(${this.arc.centroid(d)}) rotate(${midAngle * 180 / Math.PI})`;
            // create sector
            return <Sector fill={this.color(i)} d={this.arc(d)} i={i} key={i} data={d} center={center} />;
          })}
        </ReactTransitionGroup >
      </g >
    );
  }
}

export default Wheel;
