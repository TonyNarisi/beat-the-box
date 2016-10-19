class CardPile extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 1
    }
    this.chooseHigher = this.chooseHigher.bind(this);
    this.chooseSame = this.chooseSame.bind(this);
    this.chooseLower = this.chooseLower.bind(this);
  }

  chooseHigher() {
    var oldCard = this.props.card;
    var newCard = this.props.drawNextCard(this.props.pileNumber);
    if (newCard.value > oldCard.value) {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }
  }

  chooseSame() {
    var oldCard = this.props.card;
    var newCard = this.props.drawNextCard(this.props.pileNumber);
    if (newCard.value === oldCard.value) {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }
  }

  chooseLower() {
    var oldCard = this.props.card;
    var newCard = this.props.drawNextCard(this.props.pileNumber);
    if (newCard.value < oldCard.value) {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }
  }

  render() {
    let card = this.props.card
    return (
      <div className="card">
        <p className="card-text">{card.name} of {card.suit}</p>
        <button className="higher-button" onClick={this.chooseHigher}>Higher</button>
        <button className="same-button" onClick={this.chooseSame}>Same</button>
        <button className="lower-button" onClick={this.chooseLower}>Lower</button>
      </div>
    )
  }
}