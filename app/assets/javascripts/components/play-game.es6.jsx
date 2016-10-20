class PlayGame extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingDeck: [],
      box: [],
      invalidCount: 0,
      gameOver: false,
      csrf: ""
    }
    this.drawNextCard = this.drawNextCard.bind(this);
    this.addInvalidPile = this.addInvalidPile.bind(this);
    this.endGame = this.endGame.bind(this);
    this.recordGameResult = this.recordGameResult.bind(this);
    this.checkForGameOver = this.checkForGameOver.bind(this);
    this.csrfSetter = this.csrfSetter.bind(this);
  }

  componentDidMount() {
    this.setState({
      box: this.props.deck.slice(0, 9),
      remainingDeck: this.props.deck.slice(9, 53)
    });
    this.csrfSetter();
  }

  // componentDidUpdate() {
  //   this.checkForGameOver();
  // }

  csrfSetter() {
    let metaTags = document.getElementsByTagName('meta');
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].name === 'csrf-token') {
        this.setState({
          csrf: metaTags[i].content
        });
      }
    }
  }

  drawNextCard(pileNumber) {
    var box = this.state.box;
    var nextCard = this.state.remainingDeck.pop();
    box[pileNumber] = nextCard;
    this.setState({
      box: box
    });
    return nextCard;
  }

  addInvalidPile() {
    this.checkForGameOver(this.state.invalidCount + 1);
    this.setState({
      invalidCount: this.state.invalidCount + 1
    });
  }

  endGame() {
    this.setState({
      gameOver: true
    });
  }

  checkForGameOver(invalidCount) {
    console.log("checking for game over")
    console.log(invalidCount)
    if (this.state.remainingDeck.length < 1 || invalidCount === 9) {
      this.endGame();
      if (this.state.remainingDeck.length < 1 && this.state.invalidCount < 9) {
        this.recordGameResult(true);
      } else {
        this.recordGameResult(false);
      }
    }
  }

  recordGameResult(results) {
    console.log("sending results");

    let data = {game_won: results}

    fetch('/game_results', {
      method: 'post',
      dataType: 'JSON',
      headers: {
        "X-CSRF-Token": this.state.csrf,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
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
          {this.state.remainingDeck.length === 0 && this.state.invalidCount < 9 ?
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
               gameOver={this.state.gameOver}
               invalidCount={this.state.invalidCount}
               drawNextCard={this.drawNextCard}
               addInvalidPile={this.addInvalidPile}
               remainingDeck={this.state.remainingDeck}
               endGame={this.endGame}
               recordGameResult={this.recordGameResult}
               pileNumber={i}
               key={i} />
            )
          })}
        </div>
      </div>
    )
  }
}