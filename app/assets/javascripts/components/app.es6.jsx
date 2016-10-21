class App extends React.Component{
  constructor() {
    super();
    this.state = {
      showRules: false
    };
    this.isActive = this.isActive.bind(this);
    this.toggleRules = this.toggleRules.bind(this);
  }

  toggleRules() {
    this.setState({
      showRules: !this.state.showRules
    });
  }

  isActive() {
    return (this.state.showRules ? "" : "inactive");
  }

  render(){
    return (
      <div>
        <h1 id="site-name">Beat the Box</h1>
        <a href="/play_game" className="button">Start a new game</a>
        <span className="button" onClick={this.toggleRules}>Rules</span>
        <div className={`rules-div ${this.isActive()}`}>
          <p>Beat the Box is played with a shuffled standard deck of 52 playing cards. The game begins with the top 9 cards laid out in a 3 x 3 grid, with the remaining 43 cards left in the deck.</p>
          <p>On each turn the player chooses "higher", "same", or "lower" for any pile on the table. If the value of the next card in the deck matches the player's guess, that card is now displayed on the top of that pile. If a player's guess is incorrect, that pile is eliminated from the game. The card is not shown, and the player can no longer guess for that pile.</p>
          <p>Number cards' values are the numbers that are printed on them. Jacks' values are 11, Queens' values are 12, Kings' values are 13, and Aces' values are 14.</p>
          <p>The goal of the game is to get through the entire deck without eliminating all 9 piles. If all 9 piles are eliminated, even if the 9th pile is eliminated on the player's last guess, it is considered a loss. However, if the player can get through the entire deck with at least 1 pile remaining at the end, he or she has won the game.</p>
        </div>
        <div className="statistics">
          <p><span className="bold">Games Played:</span> {this.props.totalGames}</p>
          <p><span className="bold">Percentage of Games Won:</span> {Math.round(this.props.gamesWon/this.props.totalGames * 10000) / 100}%</p>
          <p><span className="bold">Percentage of Games Lost:</span> {Math.round(this.props.gamesLost/this.props.totalGames * 10000) / 100}%</p>
        </div>
      </div>
    )
  }
}