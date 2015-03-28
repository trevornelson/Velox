class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.references :user
      t.references :trip
      t.references :hotel

      t.timestamps
    end
  end
end
