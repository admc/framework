var React = require('react');
var ThingStore = require('../stores/ThingStore');
var ThingActions = require('../actions/ThingActions');

var Things = React.createClass({
  getInitialState() {
    return ThingStore.getState();
  },

  componentDidMount() {
    ThingStore.listen(this.onChange);
    ThingActions.fetchThings();
  },

  componentWillUnmount() {
    ThingStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
   if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.things.length) {
      return (
        <div>
          Spinner
        </div>
      )
    }

    return (
      <ul>
        {this.state.things.map((thing) => {
          return (
            <li>{thing.name}</li>
          );
        })}
      </ul>
    );
  }
});

module.exports = Things;
