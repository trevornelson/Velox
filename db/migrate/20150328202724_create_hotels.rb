class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.references  :itinerary
        t.string  :name
        t.string  :city
        t.string  :neighbourhood
        t.string  :postalCode
        t.string  :streetName
        t.string  :price
        t.string  :provider
        t.string  :photo_url
        t.string  :url

      t.timestamps
    end
  end
end
