import React from 'react'
import ReactDOM from 'react-dom'
import ListStore from '../stores/ListStore'
import AppDispatcher from '../dispatcher/AppDispatcher'
import NewItemForm from './NewItemForm.jsx'

let getListState = () => {
  return {
    items: ListStore.getItems()
  }
}
 
export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = getListState()
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange)
  }

  // Remove change listeners from stores
  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange)
  }

  _onChange = () => {
    this.setState(getListState())
  }

  removeItem(e){
    let id = e.target.dataset.id;
    
    AppDispatcher.dispatch({
      action: 'remove-item'
      , id: id
    })
  }

  render() {
    let _this = this
    let items = ListStore.getItems()
    let itemHtml = items.map(( listItem ) => {
      return (
        <li key={ listItem.id }>
          { listItem.name } <button onClick={ _this.removeItem } data-id={ listItem.id }>×</button>
        </li>
      )
    });

    return ( 
      <div>
        <ul>
          { itemHtml }
        </ul>
        <NewItemForm />
      </div>
    )
  }
}
