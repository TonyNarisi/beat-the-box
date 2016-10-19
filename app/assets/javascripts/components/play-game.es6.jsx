class PlayGame extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingDeck: [],
      box: []
    }
    this.dealInitialBox = this.dealInitialBox.bind(this);
  }

  componentDidMount() {
    this.dealInitialBox();
  }

  dealInitialBox() {
    for (var i = 0; i < 9; i++) {
      debugger;
      this.setState({
        box: this.state.box.concat(this.state.box.push(this.props.deck.pop()))
      })
    }
    this.setState({
      remainingDeck: this.props.deck
    })
  }

  render(){
    debugger;
    return (
      <div>
        <p>Welcome to the game playing screen!</p>
        {this.state.box.map((card, i) => {
          return (
            <p key={i}>{card.name} of {card.suit}</p>
          )
        })}
      </div>
    )
  }
}