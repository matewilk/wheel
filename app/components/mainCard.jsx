import React from 'react';
import {Card, CardHeader, CardMedia, CardActions, RaisedButton} from 'material-ui';

import Svg from './Svg';

class MainCard extends React.Component {
  render () {
    return (
      <Card style={{textAlign: 'initial'}}>
        <CardHeader
          title='Card Title'
          subtitle='Card Subtitle'
        />
        <CardMedia style={{height: '50%', width: '50%', left: '25%'}}>
          <Svg {...this.props} />
        </CardMedia>
        <CardActions>
          <RaisedButton
            label='Join Room'
            primary={true}
            onTouchTap={this.props.joinRoom}
          />
          <RaisedButton
            label='Spin'
            primary={true}
            onTouchTap={this.props.generateCode}
          />
        </CardActions>
      </Card>
    );
  }
}

export default MainCard;
