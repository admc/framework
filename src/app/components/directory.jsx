import React from 'react';
import ReactDOM from 'react-dom';

//components
import Hello from './Hello.jsx';
import World from './World.jsx';
import MyButton from './Button.jsx';
import MyAlert from './Alert.jsx';
import Navbar from './Navbar.jsx';
import MyList from './List.jsx';
import MyAppBar from './Appbar.jsx';
import Things from './Things.jsx';

export default class Directory extends React.Component {
  render() {
    return (
      <div>
        <MyAppBar/><br/>
        <Hello/><World/>
        <MyButton/>
        <MyAlert/>
        <MyList/>
        <Things/>
      </div>
    )
  }
}
