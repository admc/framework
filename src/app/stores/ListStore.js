import {EventEmitter} from 'events';
import _ from 'lodash';

var _items = [];
var loadItems = function(things) {
  _items = things;
};

let ListStore = _.extend({}, EventEmitter.prototype, {

  getItems: function() {
    return _items;
  }

  , addItem: function(new_item) {
    _items.push(new_item);
  }

  , removeItem: function(item_id) {
    
    let items = _items;
    _.remove(items, (item) => {
      return item_id == item.id;
    });
    
    _items = items;
  }

  , emitChange: function(){
    this.emit('change');
  }

  , addChangeListener: function(callback){
    this.on('change', callback);
  }

  , removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});

export default ListStore;
