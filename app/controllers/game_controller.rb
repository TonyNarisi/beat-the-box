class GameController < ApplicationController
  def index
  end

  def play
    deck = Deck.create
    @cards = deck.cards.shuffle
    render '/game/play'
  end
end
