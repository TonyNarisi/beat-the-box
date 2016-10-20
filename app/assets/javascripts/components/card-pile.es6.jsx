class CardPile extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 1,
      valid: true,
      cardDrawnLost: null,
      guessLost: null,
      cardGuessLost: null
    }
    this.chooseHigher = this.chooseHigher.bind(this);
    this.chooseSame = this.chooseSame.bind(this);
    this.chooseLower = this.chooseLower.bind(this);
    this.invalidatePile = this.invalidatePile.bind(this);
    this.checkForGameOver = this.checkForGameOver.bind(this);
  }

  chooseHigher() {
    var oldCard = this.props.card;
    var newCard = this.props.drawNextCard(this.props.pileNumber);
    if (newCard.value > oldCard.value) {
      this.checkForGameOver();
    } else {
      this.invalidatePile(newCard, "higher", oldCard);
    }
  }

  chooseSame() {
    var oldCard = this.props.card;
    var newCard = this.props.drawNextCard(this.props.pileNumber);
    if (newCard.value === oldCard.value) {
      this.checkForGameOver();
    } else {
      this.invalidatePile(newCard, "same", oldCard);
    }
  }

  chooseLower() {
    var oldCard = this.props.card;
    var newCard = this.props.drawNextCard(this.props.pileNumber);
    if (newCard.value < oldCard.value) {
      this.checkForGameOver();
    } else {
      this.invalidatePile(newCard, "lower", oldCard);
    }
  }

  invalidatePile(cardDrawnLost, guessLost, cardGuessLost) {
    this.setState({
      valid: false,
      cardDrawnLost: cardDrawnLost,
      guessLost: guessLost,
      cardGuessLost: cardGuessLost
    })
    this.props.addInvalidPile();
  }

  checkForGameOver() {
    if (this.props.remainingDeck.length < 1) {
      this.props.endGame();
    }
  }

  render() {
    let card = this.props.card
    return (
      <div className="card">
        { this.state.valid ?
            <div>
              <img className="card-image" src={card.img_path} alt="card" />
              {this.props.gameOver ?
                  null
                :
                  <div>
                    <button className="higher-button card-button" onClick={this.chooseHigher}>Higher</button>
                    <button className="same-button card-button" onClick={this.chooseSame}>Same</button>
                    <button className="lower-button card-button" onClick={this.chooseLower}>Lower</button>
                  </div>
              }
            </div>
          :
            <div>
              <p className="card-text">Eliminated Pile</p>
              <p className="card-text">The last card drawn was a {this.state.cardDrawnLost.name} of {this.state.cardDrawnLost.suit}. You guessed {this.state.guessLost} on a {this.state.cardGuessLost.name} of {this.state.cardGuessLost.suit}.</p>
            </div>
        }
      </div>
    )
  }
}