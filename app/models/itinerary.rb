class Itinerary < ActiveRecord::Base

  belongs_to  :user
  has_one  :trip
  has_one :hotel

end