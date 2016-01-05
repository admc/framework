import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello.jsx'
import World from './World.jsx'
import Button from './Button.jsx'
import Alert from './Alert.jsx'
import Navbar from './Navbar.jsx'
import List from './List.jsx'
import AppBar from './Appbar.jsx'
import Things from './Things.jsx'

export default class Directory extends React.Component {
  render() {
    return (
      <div>
        <AppBar/><br/>
        <Hello/><World/>
        <Button/>
        <Alert/>
        <List/>
        <Things/>
      </div>
    )
  }
}
