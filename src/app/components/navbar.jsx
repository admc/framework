import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button'
import LeftNav from 'material-ui/lib/left-nav';

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: 'subheader', text: 'Resources' },
  {
     type: 'link',
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     type: 'link',
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true
  },
];

class Navbar extends React.Component {
   constructor(props) {
     super(props);
     this._toggleNav = this._toggleNav.bind(this);
   }

  _toggleNav() {
    this.refs.leftNav.toggle();
  }

  render() {
    return  (
      <div>
        <LeftNav ref="leftNav" menuItems={menuItems} docked={false} />
        <RaisedButton label="Toggle Nav" primary={true} onTouchTap={this._toggleNav} />
      </div>
    );
  }
}

module.exports = Navbar;
