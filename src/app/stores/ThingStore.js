var alt = require('../alt');
var ThingActions = require('../actions/ThingActions');

class ThingStore {

  constructor() {
    this.things = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateThings: ThingActions.UPDATE_THINGS,
      handleFetchThings: ThingActions.FETCH_THINGS,
      handleThingsFailed: ThingActions.THINGS_FAILED
    });
  }

  handleUpdateThings(things) {
    this.things = things;
    this.errorMessage = null;
  }

  handleFetchThings() {
    // reset the array while we're fetching new things so React can
    // be smart and render a spinner for us since the data is empty.
    this.things = [];
  }

  handleThingsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(ThingStore, 'ThingStore');
