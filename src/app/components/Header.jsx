import React from 'react'
import ReactDOM from 'react-dom'
 
export default class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.refs.username.innerHTML= window.username;
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Demo App</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/user/logout">Logout</a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="#" ref="username"></a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#">Content</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
