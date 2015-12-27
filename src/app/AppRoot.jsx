import React from 'react';
import ReactDOM from 'react-dom';

//theme
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import MaterialTheme from './config/theme';

//components
import Hello from './components/hello.jsx';
import World from './components/world.jsx';
import MyButton from './components/button.jsx';
import MyAppBar from './components/appbar.jsx';
import MyAlert from './components/alert.jsx';
import Navbar from './components/navbar.jsx';
import MyList from './components/list.jsx';

class AppRoot extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MaterialTheme)
    }
  }

  render() {
    return (
      <div>
        <MyAppBar/>
        <Navbar/>
        <Hello/><World/>
        <MyButton/>
        <MyAlert/>
        <MyList/>
      </div>
    )
  }
}

AppRoot.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(<AppRoot/>, 
  document.getElementById('app-root')
);
