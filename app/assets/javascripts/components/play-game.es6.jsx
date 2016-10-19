class PlayGame extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingDeck: [],
      box: []
    }
    this.drawNextCard = this.drawNextCard.bind(this);
  }

  componentDidMount() {
    this.setState({
      box: this.props.deck.slice(0, 9),
      remainingDeck: this.props.deck.slice(9, 53)
    })
  }

  drawNextCard(pileNumber) {
    var box = this.state.box;
    var nextCard = this.state.remainingDeck.pop();
    box[pileNumber] = nextCard;
    this.setState({
      box: box
    })
    return nextCard;
  }

  render(){
    return (
      <div className="game-board">
        <p>Welcome to the game playing screen!</p>
        {this.state.box.map((card, i) => {
          return (
            <CardPile
             card={card}
             drawNextCard={this.drawNextCard}
             pileNumber={i}
             key={i} />
          )
        })}
      </div>
    )
  }
}