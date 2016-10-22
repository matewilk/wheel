import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib/index';
import {Card, CardHeader, CardMedia, CardActions, RaisedButton, TextField} from 'material-ui';

import Svg from './Svg';

class MainCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      add: {
        disabled: true
      },
      remove: {
        disabled: true
      },
      amount: ''
    };
  }

  componentDidMount () {
    var data = [
      {id: 0, name: '10', count: 10},
      {id: 1, name: '20', count: 10},
      {id: 2, name: '30', count: 10},
      {id: 3, name: '40', count: 10},
      {id: 4, name: '50', count: 10}
    ];

    this.setState({data: data});
  }

  addSector () {
    this.state.data.push({
      id: this.state.data.length + 1,
      name: this.state.amount,
      count: 10
    });

    this.setState({
      data: this.state.data,
      amount: '',
      add: {
        disabled: true
      }
    });
  }

  disableAddButton (element, value) {
    this.setState({
      add: {
        disabled: value === ''
      },
      amount: value
    });
  }

  render () {
    return (
      <Card style={{textAlign: 'initial'}}>
        <CardHeader
          title='Card Title'
          subtitle='Card Subtitle'
        />
        <CardMedia style={{height: '50%', width: '50%', left: '25%'}}>
          <Svg message={this.props.message} data={this.state.data} />
          <form >
            <TextField
              name='amount'
              type='text'
              ref='amount'
              fullWidth={true}
              value={this.state.amount}
              hintText={'50'}
              floatingLabelText={'Amount'}
              onChange={this.disableAddButton.bind(this)}
            />
            <Row between='xs' style={{width: 'none', maxWidth: 'none'}}>
              <Col xs={6}>
                <RaisedButton
                  label='Add'
                  primary={true}
                  fullWidth={true}
                  onTouchTap={this.addSector.bind(this)}
                  disabled={this.state.add.disabled}
                />
              </Col>
              <Col xs={6}>
                <RaisedButton
                  label='Remove'
                  secondary={true}
                  fullWidth={true}
                  disabled={this.state.remove.disabled}
                />
              </Col>
            </Row>
          </form>
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
