import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Router, Route, Link } from 'react-router'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Directory from './components/Directory.jsx'

import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'
import MaterialTheme from './config/theme'

class AppRoot extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MaterialTheme)
    }
  }

  render() {
    return (
      <div>
       <Header /> 
       <main>
         <div className="container">
          <div className="col s12 m4 l3">
          </div>
          <div className="col s12 m8 l9" style={{marginBottom:"50"}}> 
            {this.props.children}
          </div>
          <Navbar/>
         </div>
       </main>
      </div>
    )
  }
}

AppRoot.childContextTypes = {
  muiTheme: React.PropTypes.object
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppRoot}>
      <Route path="/directory" component={Directory} />
      <Route path="*" component={AppRoot}/>
    </Route>
  </Router>
), document.getElementById('app-root'))
