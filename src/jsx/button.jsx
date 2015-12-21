import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MyAwesomeReactComponent extends React.Component {
  _handleClick () {
    console.log('test');
  }
  render() {
    return (
      <RaisedButton
        label="Default"
        onClick={this._handleClick}
      />
    );
  }
};

ReactDOM.render(<MyAwesomeReactComponent/>, document.getElementById('button'));
