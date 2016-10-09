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

  handleTouchTap: function () {
    socket.emit('client-emit', 'blah!!');
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
            label='Spin'
            primary={true}
            onTouchTap={this.handleTouchTap}
        />
        </CardActions>
      </Card>
    );
  }
});

export default MainCard;
