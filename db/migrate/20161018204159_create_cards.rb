class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :suit
      t.string :name
      t.integer :value
      t.integer :deck_id
      t.string :img_path

      t.timestamps
    end
  end
end
