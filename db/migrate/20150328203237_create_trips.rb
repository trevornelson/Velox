class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.references  :itinerary
      t.string  :price, null: false
      t.string  :duration, null: false

      t.timestamps null: false
    end
  end
end
