import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import FlatButton from 'material-ui/lib/flat-button'

const styles = {
  title: {
    cursor: 'pointer'
  }
}

export default class MyAlert extends React.Component {

  _handleTouchTap = () => {
    console.log('onTouchTap triggered on the title component')
  }

  render() {
    return (
      <AppBar
        title={<span style={styles.title} onTouchTap={this._handleTouchTap}>Title</span>}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" onTouchTap={this._handleTouchTap} />}
      />
    )
  }
}
