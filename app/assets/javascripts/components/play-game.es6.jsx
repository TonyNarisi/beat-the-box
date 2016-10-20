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
      <div id="game-board-holder">
        <div className="game-board">
          <h2 id="cards-remaining">Cards Remaining in Deck: <span className="number-statistic">{this.state.remainingDeck.length}</span></h2>
          <h2 id="invalid-piles">Eliminated Piles: <span className="number-statistic">{this.state.invalidCount}</span></h2>
          {this.state.invalidCount === 9 ?
              <div>
                <h2 className="game-message">Game Lost!</h2>
                <a href="/play_game"><button className="retry-button">Retry!</button></a>
              </div>
            :
              null
          }
          {this.state.remainingDeck.length === 0 ?
              <div>
                <h2 className="game-message">Congratulations, you've beat the box!</h2>
                <a href="/play_game"><button className="retry-button">Retry!</button></a>
              </div>
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
      </div>
    )
  }
}