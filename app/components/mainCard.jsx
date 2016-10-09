import React from 'react';
import {Card, CardHeader, CardActions, RaisedButton} from 'material-ui';
import io from 'socket.io-client';

let socket = io('http://localhost:3000');

let MainCard = React.createClass({
  componentDidMount: function () {
    socket.on('server-emit', (message) => {
      console.log(message);
    });
  },

  joinRoom: function () {
    socket.emit('join', {room: 'abc'});
  },

  generateCode: function () {
    socket.emit('client-emit', Math.random());
  },

  render: function () {
    return (
      <Card style={{textAlign: 'initial'}}>
        <CardHeader
          title='Card Title'
          subtitle='Card Subtitle'
        />
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
