var React = require('react')
var ThingStore = require('../stores/ThingStore')
var ThingActions = require('../actions/ThingActions')

export default class Things extends React.Component {

  constructor(props) {
    super(props)
    this.state = ThingStore.getState()
  }

  componentDidMount() {
    ThingStore.listen(this._onChange)
    ThingActions.fetchThings()
  }

  componentWillUnmount() {
    ThingStore.unlisten(this._onChange)
  }

  _onChange = (state) => {
    this.setState(state)
  }

  render() {
   if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      )
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
        { 
          this.state.things.map((thing) => {
            return (
              <li>{thing.name}</li>
            )
          }) 
        }
      </ul>
    )
  }
}
