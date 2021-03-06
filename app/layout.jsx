import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib/index';
import WebSocket from './components/WebSocket';

let LayoutMain = React.createClass({
  render: function () {
    return (
      <Row center='xs'>
        <Col xs={12} sm={10} md={10} lg={8}>
          <WebSocket />
        </Col>
      </Row>
    );
  }
});

export default LayoutMain;
