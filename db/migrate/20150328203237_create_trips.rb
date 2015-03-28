class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.references  :itinerary
      t.string  :price
      t.string  :duration

      t.timestamps
    end
  end
end
