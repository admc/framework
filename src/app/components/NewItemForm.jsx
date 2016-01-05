import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import AppDispatcher from '../dispatcher/AppDispatcher'

export default class NewItemForm extends React.Component {

  createItem(e) {
    e.preventDefault();
    let id = guid();
    let item_title = ReactDOM.findDOMNode(this.refs.item_title).value.trim();
    ReactDOM.findDOMNode(this.refs.item_title).value = '';

    AppDispatcher.dispatch({
      action: 'add-item'
      , new_item: {
        id: id
        , name: item_title
      }
    })
  }

  render(){
    return (
      <form onSubmit={ this.createItem.bind(this) }>
        <input type="text" ref="item_title"/>
        <RaisedButton label="Add new item" type="submit" primary={true} />
      </form>
    )
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
