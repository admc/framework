import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import AppBar from 'material-ui/lib/app-bar'
import RaisedButton from 'material-ui/lib/raised-button'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconButton from 'material-ui/lib/icon-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'

export default class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  _handleToggle = () => this.setState({open: !this.state.open})
  _handleClose = () => this.setState({open: false})

  _handleDirectory = (e) => {
    e.preventDefault()
    this.context.router.push('/directory')
  }

  _handleHome = (e) => {
    e.preventDefault()
    this.context.router.push('/')
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Controlled LeftNav That Opens From Right"
          onTouchTap={this._handleToggle} />
        <LeftNav 
          width={200} 
          openRight={true} 
          open={this.state.open}>
          <AppBar 
            title="AppBar"
            iconElementLeft={<IconButton onTouchTap={this._handleClose}><NavigationClose /></IconButton>}
          />
            <MenuItem onClick={this._handleHome}>Home</MenuItem>
            <MenuItem onClick={this._handleDirectory}>Directory</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
