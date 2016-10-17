import React from 'react';
import * as d3 from 'd3';

class Arc extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
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

    this.color = d3.scaleOrdinal([
      '#68c8d7',
      '#eccd63',
      '#bb8cdd',
      '#de6942',
      '#52b36e',
      '#bbc7d9'
    ]);

    var data = [
      {name: 'test1', count: 40},
      {name: 'test2', count: 32},
      {name: 'test3', count: 14},
      {name: 'test4', count: 6}
    ];

    this.setState({data: data});
  }

  generateArc () {
    let arc = d3.arc()
      .outerRadius(50)
      .innerRadius(20);

    let path = this.pie(this.state.data).map((d, i) => {
      return (
        <path fill={this.color(i)} d={arc(d)} key={i} />
      );
    });

    return path;
  }

  render () {
    let path = this.generateArc();
    let rotation = this.props.message.data || 0;
    // let rotation = 0;

    let transorm = `translate(50, 50) rotate(${rotation.toString()})`;
    return (
      <g transform={transorm} >
        {path}
      </g>
    );
  }
}

export default Arc;
