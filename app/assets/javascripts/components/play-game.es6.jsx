class PlayGame extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingDeck: [],
      box: []
    }
  }

  componentDidMount() {
    this.setState({
      box: this.props.deck.slice(0, 9),
      remainingDeck: this.props.deck.slice(9, 53)
    })
  }

  render(){
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