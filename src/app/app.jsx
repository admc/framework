import React from 'react';
import ReactDOM from 'react-dom';

//components
import Hello from './components/hello.jsx';
import World from './components/world.jsx';
import MyButton from './components/button.jsx';
import MyAppBar from './components/appbar.jsx';
import MyAlert from './components/alert.jsx';
import Navbar from './components/navbar.jsx';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <MyAppBar/>
        <Navbar/>
        <Hello/><World/>
        <MyButton/>
        <MyAlert/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, 
  document.getElementById('app')
);
