import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import * as d3 from 'd3';

import Sector from './Sector';

class Wheel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
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

    var data = [
      {id: 0, name: '10', count: 10},
      {id: 1, name: '20', count: 10},
      {id: 2, name: '30', count: 10},
      {id: 3, name: '40', count: 10},
      {id: 4, name: '50', count: 10}
    ];

    this.setState({data: data});
  }

  addShit () {
    this.state.data.push({name: '10000', count: 10});
    this.setState({data: this.state.data});
  }

  render () {
    let rotation = this.props.message.data || 0;

    let transform = `translate(50, 50) rotate(${rotation.toString()})`;
    return (
      <g transform={transform} onClick={this.addShit.bind(this)}>
        <ReactTransitionGroup component='g' >
          {this.pie(this.state.data).map((d, i) => {
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
