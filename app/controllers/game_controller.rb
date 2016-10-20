class GameController < ApplicationController
  def index
    @game_count = Deck.all.length
  end

  def play
    deck = Deck.create
    @cards = deck.cards.shuffle
    render '/game/play'
  end
end
