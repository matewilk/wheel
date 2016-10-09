import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LayoutMain from './layout';

const App = React.createClass({
  render: function () {
    return (
      <MuiThemeProvider>
        <LayoutMain />
      </MuiThemeProvider>
    );
  }
});

export default App;
