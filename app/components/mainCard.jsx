import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib/index';
import {Card, CardHeader, CardMedia, CardActions, RaisedButton, TextField} from 'material-ui';

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
          <TextField
            hintText={'50'}
            floatingLabelText={'Amount'}
          />
          <Row between='xs' style={{width: 'none', maxWidth: 'none'}}>
            <Col xs={6}>
              <RaisedButton
                label='Add'
                primary={true}
                fullWidth={true}
              />
            </Col>
            <Col xs={6}>
              <RaisedButton
                label='Remove'
                secondary={true}
                fullWidth={true}
              />
            </Col>
          </Row>
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
