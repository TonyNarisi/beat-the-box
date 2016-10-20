class GameResultsController < ApplicationController
  def create
    @game_result = GameResult.create(game_results_params)
    puts @game_result.game_won
  end

  private
  def game_results_params
    params.require(:game_result).permit(:game_won)
  end
end
