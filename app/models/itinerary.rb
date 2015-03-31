class Itinerary < ActiveRecord::Base

  belongs_to  :user
  has_many  :trips
  has_one :hotel

  scope :with_all_relations, -> (user_id) { includes(:trips => :flights,
                                                      :hotel
                                                      ).find(user_id)}

  def self.create_with_all_relations(params)
    itinerary = self.new(params[:itinerary_title], params[:user_id])
    success? = true
    params[:trips].each do |trip|
      t = itinerary.trips.new(trip[:details])
      if valid?
        t.save
        t.flights.each do |flight|
          f = t.flights.new(flight[:details])
          if f.valid?
            f.save
          else
            success? = false
          end
        end
      else
        success? = false
      end
    end
    h = itinerary.hotel.new(params[:hotel])
    if h.valid?
      h.save
    else
      success? = false
    end
    return success?
  end

end
