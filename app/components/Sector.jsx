import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Sector extends React.Component {
  constructor () {
    super();
    this.state = {
      x: 0,
      y: -60,
      fillOpacity: 0
    };
    this.transition = d3.transition()
      .duration(2000).ease(d3.easeCubicInOut);
  }

  componentDidMount () {
    let node = ReactDOM.findDOMNode(this);
    d3.select(node)
      .on('mouseover', () => {
        d3.select(node)
          .transition()
          .duration(500)
          .ease(d3.easeBounceOut)
          .attr('transform', (d) => {
            let dist = 3;
            let midAngle = ((this.props.data.endAngle - this.props.data.startAngle) / 2) + this.props.data.startAngle;
            var x = Math.sin(midAngle) * dist;
            var y = -Math.cos(midAngle) * dist;
            return 'translate(' + x + ',' + y + ')';
          });
      })
      .on('mouseout', () => {
        d3.select(node)
          .transition()
          .duration(500)
          .ease(d3.easeBounceOut)
          .attr('transform', 'translate(0, 0)');
      });
  }

  componentWillEnter (callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));

    this.setState({x: this.props.i * 32});

    node.transition(this.transition)
      .attr('y', 0)
      .style('fill-opacity', 0.7)
      .on('end', () => {
        this.setState({y: 0, fillOpacity: 0.7});
        // callback();
      });
  }

  componentWillLeave (callback) {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <g fillOpacity={this.state.fillOpacity}>
        <path fill={this.props.fill} d={this.props.d} key={this.props.i} />
        <text fill='white' transform={this.props.center} textAnchor='middle' fontSize='6px'>{this.props.data.data.name}</text>
      </g>
    );
  }
}

export default Sector;
