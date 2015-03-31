class Itinerary < ActiveRecord::Base

  belongs_to  :user
  has_many  :trips
  has_one :hotel

  scope :with_all_relations, -> (user_id) { includes(:trips => :flights,
                                                      :hotel
                                                      ).find(user_id)}

end
