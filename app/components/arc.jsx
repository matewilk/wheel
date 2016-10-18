import React from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';
import * as d3 from 'd3';

class Arc extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      padAngle: 0
    };
  }

  componentWillMount () {
    this.pie = d3.pie()
      .value(function (d) { return d.count; })
      .padAngle(this.state.padAngle)
      .sort(null);

    this.arc = d3.arc()
      .outerRadius(45)
      .innerRadius(20)
      .cornerRadius(1);

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
      {name: 'test1', count: 40},
      {name: 'test2', count: 40},
      {name: 'test3', count: 40},
      {name: 'test3', count: 40},
      {name: 'test3', count: 40},
      {name: 'test3', count: 40},
      {name: 'test4', count: 40},
      {name: 'test4', count: 40},
      {name: 'test4', count: 40},
      {name: 'test4', count: 40}
    ];

    this.setState({data: data});
  }

  addShit () {
    this.state.data.push({name: 'test4', count: 40});
    this.setState({data: this.state.data});
  }

  render () {
    let rotation = this.props.message.data || 0;

    let transform = `translate(50, 50) rotate(${rotation.toString()})`;
    return (
      <g transform={transform} onClick={this.addShit.bind(this)}>
        <ReactTransitionGroup component='g' >
          {this.pie(this.state.data).map((d, i) => {
            return <PathBuilder fill={this.color(i)} d={this.arc(d)} i={i} key={i} stroke='#FFFFFF' />;
          })}
        </ReactTransitionGroup >
      </g >
    );
  }
}

class PathBuilder extends React.Component {
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
      <path fillOpacity={this.state.fillOpacity} fill={this.props.fill} d={this.props.d} key={this.props.i} />
    );
  }
}

export default Arc;
