import React from 'react';
import io from 'socket.io-client';
import MainCard from './MainCard';

let socket = io('http://localhost:3000');

class WebSocket extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      message: {
        data: 0
      }
    };
  }

  componentDidMount () {
    socket.on('server-emit', (message) => {
      this.setState({message: message});
    });
  }

  joinRoom () {
    socket.emit('join', {room: 'abc'});
  }

  generateCode () {
    socket.emit('client-emit', this.getRandomInt(0, 360));
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render () {
    return (
      <MainCard {...this.state} joinRoom={this.joinRoom} generateCode={this.generateCode.bind(this)} />
    );
  }
}

export default WebSocket;
