class App extends React.Component{
  render(){
    return (
      <div>
        <h1 id="site-name">Beat the Box</h1>
        <a href="/play_game" className="button">Start a new game</a>
        <span className="button">Rules</span>
        <p><span className="bold">Games Played:</span> {this.props.totalGames}</p>
        <p><span className="bold">Percentage of Games Won:</span> {Math.round(this.props.gamesWon/this.props.totalGames * 10000) / 100}%</p>
        <p><span className="bold">Percentage of Games Lost:</span> {Math.round(this.props.gamesLost/this.props.totalGames * 10000) / 100}%</p>
      </div>
    )
  }
}