class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.references  :user
      t.string      :title

      t.timestamps null: false
    end
  end
end
