class GameController < ApplicationController
  def index
    @games_won = GameResult.where(game_won: true).length
    @games_lost = GameResult.where(game_won: false).length
    @total_games = GameResult.all.length
  end

  def play
    @deck = Deck.create
    @cards = @deck.cards.shuffle
    render '/game/play'
  end
end
