class Itinerary < ActiveRecord::Base

  belongs_to  :user
  has_many  :trips
  has_many :hotels

  def self.with_all_relations(user_id)
    return self.includes(:hotels, :trips => :flights)
  end

  def self.create_with_all_relations(params)
    itinerary = self.new(user_id: params['user_id'])
    success = true
    params['trips'].each do |trip|
      t = itinerary.trips.new(price: trip['price'], duration: trip['duration'])
      if t.valid?
        t.save
        trip['flights'].each do |flight|
          f = t.flights.new(carrier_abbv: flight['carrier_abbv'],
                            airport_ori_code: flight['airport_ori_code'],
                            airport_dest_code: flight['airport_dest_code'],
                            duration: flight['duration'])
          if f.valid?
            f.save
          else
            success = false
          end
        end
      else
        success = false
      end
    end
    h = itinerary.hotels.new(params['hotel'])
    if h.valid?
      h.save
    else
      success = false
    end
    return success
  end

end
