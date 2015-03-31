class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.references  :itinerary
        t.string  :name, null: false
        t.string  :city, null: false
        t.string  :neighbourhood, null: false
        t.string  :postalCode, null: false
        t.string  :streetName, null: false
        t.string  :price, null: false
        t.string  :provider, null: false
        t.string  :photo_url, null: false
        t.string  :url, null: false

      t.timestamps null: false
    end
  end
end
