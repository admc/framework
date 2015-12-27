import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import Navbar from './components/navbar.jsx';
import Directory from './components/directory.jsx'

//theme
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import MaterialTheme from './config/theme';

class AppRoot extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MaterialTheme)
    }
  }

  render() {
    return (
      <div>
        Welcome to the awesome example app!
        <Navbar/>
        {this.props.children}
      </div>
    )
  }
}

AppRoot.childContextTypes = {
  muiTheme: React.PropTypes.object
}

/*ReactDOM.render(<AppRoot/>, 
  document.getElementById('app-root')
);*/

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppRoot}>
      <Route path="/directory" component={Directory} />
      <Route path="*" component={AppRoot}/>
    </Route>
  </Router>
), document.getElementById('app-root'))
