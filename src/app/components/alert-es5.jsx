import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button'
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const standardActions = [{
  text: 'Okay'
}];

const MyAlert = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },
  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },
  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },
  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },
  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this._handleRequestClose}>
          1-2-3-4-5
        </Dialog>
        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
      </div>
    );
  },
});

ReactDOM.render(<MyAlert/>,
  document.getElementById('alert-button')
);