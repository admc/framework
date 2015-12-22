import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

let NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MyAppBar extends React.Component {
  _handleClose () {
    console.log('CLOSE');
  }
  render() {
    return (
      <AppBar
        title="Demo App Like Woah"
        iconElementLeft={
          <IconButton onClick={this._handleClose} >
            <NavigationClose />
          </IconButton>
        }
        iconElementRight={
          <IconMenu iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
      } />
    );
  }
};

ReactDOM.render(<MyAppBar/>, document.getElementById('appbar'));
