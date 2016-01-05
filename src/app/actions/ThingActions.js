var alt = require('../alt');
import ThingSource from '../sources/ThingSource';

class ThingActions {
  updateThings(things) {
    return things;
  }

  fetchThings() {
    return (dispatch) => {
      // we dispatch an event here so we can have "loading" state.
      dispatch();
      ThingSource.fetch()
        .then((things) => {
          // we can access other actions within our action through `this.actions`
          this.updateThings(things);
        })
        .catch((errorMessage) => {
          this.thingsFailed(errorMessage);
        });
      }
  }

  thingsFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(ThingActions);
