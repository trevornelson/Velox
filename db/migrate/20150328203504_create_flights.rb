class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.references  :trip
      t.string  :carrier_abbv
      t.string  :airport_ori_code
      t.string  :airport_dest_code
      t.string  :duration

      t.timestamps
    end
  end
end
