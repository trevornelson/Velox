class Trip < ActiveRecord::Base

  belongs_to  :itinerary
  has_many :flights

end