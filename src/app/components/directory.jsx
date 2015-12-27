import React from 'react';
import ReactDOM from 'react-dom';

//components
import Hello from './hello.jsx';
import World from './world.jsx';
import MyButton from './button.jsx';
import MyAlert from './alert.jsx';
import Navbar from './navbar.jsx';
import MyList from './list.jsx';
import MyAppBar from './appbar.jsx';

export default class Directory extends React.Component {
  render() {
    return (
      <div>
        <MyAppBar/><br/>
        <Hello/><World/>
        <MyButton/>
        <MyAlert/>
        <MyList/>
      </div>
    )
  }
}
