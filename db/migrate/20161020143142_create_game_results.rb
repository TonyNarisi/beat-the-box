class CreateGameResults < ActiveRecord::Migration[5.0]
  def change
    create_table :game_results do |t|
      t.boolean :game_won

      t.timestamps
    end
  end
end
