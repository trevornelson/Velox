user = User.create(username: 'demo_user', password: '12345', email: 'demo@example.com')

hotel_imgs = ['http://www.mayfairhotelandspa.com/_images/_design/headers/rooftop2.jpg', 'https://www.gametimesc.com/Content/images/rooms.jpg', 'http://airporthotelguru.com/wp-content/uploads/2008/03/yvrfair1.jpg', 'http://hotelsistanbul.us/wp-content/uploads/2014/07/Hotel-Software-Cloud-Based-Hotel-and-Digital-Marketing.jpg']

json_itinerary = {'itinerary_title': Faker::Lorem.words,
                  'user_id': user.id,
                  'trips': [{'flights': {'carrier_abbv': 'UNT',
                                          'airport_ori_code': 'LGA',
                                          'airport_dest_code': 'SFO',
                                          'duration': '4 hours, 29 min'
                                        },
                                        {'carrier_abbv': 'DTA',
                                          'airport_ori_code': 'EWR',
                                          'airport_dest_code': 'DFW',
                                          'duration': '3 hours, 10 min'}
                            }],
                  'hotel': {'name': Faker::Company.name,
                            'city': Faker::Address.city,
                            'neighborhood': Faker::Lorem.word,
                            'postal_code': Faker::Address.zip_code,
                            'street_name': Faker::Address.street_name,
                            'price': Faker::Commerce.price,
                            'provider': Faker::Company.name,
                            'photo_url': hotel_imgs.sample,
                            'url': Faker::Internet.domain_name}
                }


user.itineraries.create_with_all_relations(json_itinerary)
