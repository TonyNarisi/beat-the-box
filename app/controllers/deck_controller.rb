class DeckController < ApplicationController
  def destroy
    deck = Deck.find(params[:id])
    deck.destroy
  end
end
