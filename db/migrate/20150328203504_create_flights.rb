class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.references  :trip
      t.string  :carrier_abbv, null: false
      t.string  :airport_ori_code, null: false
      t.string  :airport_dest_code, null: false
      t.string  :duration, null: false

      t.timestamps null: false
    end
  end
end
