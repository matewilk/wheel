import React from 'react';
import {Card, CardHeader, CardMedia, CardActions, RaisedButton} from 'material-ui';
import io from 'socket.io-client';

import Wheel from './wheel';

let socket = io('http://localhost:3000');

let MainCard = React.createClass({
  componentDidMount: function () {
    socket.on('server-emit', (message) => {
      this.setState({rotation: message});
    });
  },

  getInitialState: function () {
    return {
      rotation: 0
    };
  },

  joinRoom: function () {
    socket.emit('join', {room: 'abc'});
  },

  generateCode: function () {
    socket.emit('client-emit', this.getRandomInt(0, 360));
  },

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  render: function () {
    return (
      <Card style={{textAlign: 'initial'}}>
        <CardHeader
          title='Card Title'
          subtitle='Card Subtitle'
        />
        <CardMedia style={{height: '50%', width: '50%', left: '25%'}}>
          <Wheel rotation={this.state.rotation} />
        </CardMedia>
        <CardActions>
          <RaisedButton
            label='Join Room'
            primary={true}
            onTouchTap={this.joinRoom}
          />
          <RaisedButton
            label='Generate Code'
            primary={true}
            onTouchTap={this.generateCode}
          />
        </CardActions>
      </Card>
    );
  }
});

export default MainCard;
