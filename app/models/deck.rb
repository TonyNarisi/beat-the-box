class Deck < ApplicationRecord
  has_many :cards, dependent: :destroy

  after_create :generate_cards

  protected
    def generate_cards
      suits = ["Diamonds", "Spades", "Clubs", "Hearts"]
      cards = [{name: "Two", value: 2},
               {name: "Three", value: 3},
               {name: "Four", value: 4},
               {name: "Five", value: 5},
               {name: "Six", value: 6},
               {name: "Seven", value: 7}, 
               {name: "Eight", value: 8},
               {name: "Nine", value: 9},
               {name: "Ten", value: 10},
               {name: "Jack", value: 11},
               {name: "Queen", value: 12},
               {name: "King", value: 13},
               {name: "Ace", value: 14}]
      suits.each do |suit|
        cards.each do |card|
          if card[:value] <= 10
            img_path = "/PNG-cards-1.3/" + card[:value].to_s + "_of_" + suit.downcase + ".png"
          else
            img_path = "/PNG-cards-1.3/" + card[:name].downcase + "_of_" + suit.downcase + ".png"
          end
          Card.create(suit: suit, name: card[:name], value: card[:value], img_path: img_path, deck_id: self.id)
        end
      end
    end
end
