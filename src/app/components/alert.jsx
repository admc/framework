import React from 'react'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'

export default class Alert extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  _handleOpen = () => {
    this.setState({open: true})
  }

  _handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose} />
      ,<FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose} />
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Actions" onTouchTap={this._handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this._handleClose}>
          The actions in this window were passed in as an array of react objects.
        </Dialog>
      </div>
    );
  }
}
