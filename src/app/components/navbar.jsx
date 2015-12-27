import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleDirectory= this.handleDirectory.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  handleDirectory(e) {
    e.preventDefault();
    this.context.history.pushState(null, '/directory')
  }

  handleHome(e) {
    e.preventDefault();
    this.context.history.pushState(null, '/')
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Controlled LeftNav That Opens From Right"
          onTouchTap={this.handleToggle} />
        <LeftNav 
          width={200} 
          openRight={true} 
          open={this.state.open}>
          <AppBar 
            title="AppBar"
            iconElementLeft={<IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>}
          />
            <MenuItem onClick={this.handleHome}>Home</MenuItem>
            <MenuItem onClick={this.handleDirectory}>Directory</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

Navbar.contextTypes = {
  history: React.PropTypes.object,
  location: React.PropTypes.object
};
