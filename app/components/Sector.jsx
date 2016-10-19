import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Sector extends React.Component {
  constructor () {
    super();
    this.state = {
      x: 0,
      y: -60,
      fillOpacity: 0.5
    };
    this.transition = d3.transition()
      .duration(2000).ease(d3.easeCubicInOut);
  }

  componentWillEnter (callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));

    this.setState({x: this.props.i * 32});

    node.transition(this.transition)
      .attr('y', 0)
      .style('fill-opacity', 1)
      .on('end', () => {
        this.setState({y: 0, fillOpacity: 1});
        // callback();
      });
  }

  componentWillLeave (callback) {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <g>
        <path fillOpacity={this.state.fillOpacity} fill={this.props.fill} d={this.props.d} key={this.props.i} />
        <text fill='white' transform={this.props.center} textAnchor='middle' fontSize='6px'>{this.props.data.data.name}</text>
      </g>
    );
  }
}

export default Sector;
