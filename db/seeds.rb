user = User.create(username: 'demo_user', password: '12345', email: 'demo@example.com')

hotel_imgs = ['http://www.mayfairhotelandspa.com/_images/_design/headers/rooftop2.jpg', 'https://www.gametimesc.com/Content/images/rooms.jpg', 'http://airporthotelguru.com/wp-content/uploads/2008/03/yvrfair1.jpg', 'http://hotelsistanbul.us/wp-content/uploads/2014/07/Hotel-Software-Cloud-Based-Hotel-and-Digital-Marketing.jpg']

json_itinerary = {'user_id' => 1,
                  'trips' => [{'price' => '476.32',
                              'duration' => '7 hours, 39 min',
                              'flights' => [{'carrier_abbv' => 'UNT',
                                            'flight_num' => Faker::Code.isbn,
                                            'carrier_full' => 'United',
                                            'airport_ori_code' => 'LGA',
                                            'airport_dest_code' => 'SFO',
                                            'duration' => '4 hours, 29 min'
                                            },
                                            {'carrier_abbv' => 'DTA',
                                              'flight_num' => Faker::Code.isbn,
                                              'carrier_full' => 'Delta',
                                              'airport_ori_code' => 'EWR',
                                              'airport_dest_code' => 'DFW',
                                              'duration' => '3 hours, 10 min'}]
                                            }],
                  'hotel' => {'name' => Faker::Company.name,
                            'city' => Faker::Address.city,
                            'neighbourhood' => Faker::Lorem.word,
                            'postal_code' => Faker::Address.zip_code,
                            'street_name' => Faker::Address.street_name,
                            'price' => '326.76',
                            'provider' => Faker::Company.name,
                            'photo_url' => hotel_imgs.sample,
                            'url' => Faker::Internet.domain_name}
                }


4.times do
  user.itineraries.create_with_all_relations(json_itinerary)
end
