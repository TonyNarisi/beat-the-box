class App extends React.Component{
  render(){
    return (
      <div>
        <h1>Welcome to Beat the Box</h1>
        <h2>Please select an option from below</h2>
        <ul>
          <li><a href="/play_game">Start a new game</a></li>
          <li>Rules</li>
        </ul>
        <p>Games Played: {this.props.totalGames}</p>
        <p>Percentage of Games Won: {Math.round(this.props.gamesWon/this.props.totalGames * 10000) / 100}%</p>
        <p>Percentage of Games Lost: {Math.round(this.props.gamesLost/this.props.totalGames * 10000) / 100}%</p>
      </div>
    )
  }
}