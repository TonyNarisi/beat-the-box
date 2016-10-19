class PlayGame extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingDeck: [],
      box: [],
      invalidCount: 0
    }
    this.drawNextCard = this.drawNextCard.bind(this);
    this.addInvalidPile = this.addInvalidPile.bind(this);
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

  addInvalidPile() {
    this.setState({
      invalidCount: this.state.invalidCount + 1
    })
  }

  render(){
    return (
      <div className="game-board">
        <p>Welcome to the game playing screen!</p>
        <p>Cards Remaining in Deck: {this.state.remainingDeck.length}</p>
        <p>Invalid Piles: {this.state.invalidCount}</p>
        {this.state.invalidCount === 9 ?
            <div>
              <p>Game Lost!</p>
              <button><a href="/play_game">Retry!</a></button>
            </div>
          :
            null
        }
        {this.state.remainingDeck.length === 0 ?
            <h1>Congratulations, you've beat the box!</h1>
          :
            null
        }
        {this.state.box.map((card, i) => {
          return (
            <CardPile
             card={card}
             drawNextCard={this.drawNextCard}
             addInvalidPile={this.addInvalidPile}
             pileNumber={i}
             key={i} />
          )
        })}
      </div>
    )
  }
}