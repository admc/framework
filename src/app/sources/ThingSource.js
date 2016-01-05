import ThingActions from '../actions/ThingActions';

var ThingSource = {
  fetch: function () {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      $.get( "/things", function( data ) {
        resolve(data);
      });
    });
  }
};

module.exports = ThingSource;
