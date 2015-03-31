stub_trips = {
 "kind": "qpxExpress#tripsSearch",
 "trips": {
  "kind": "qpxexpress#tripOptions",
  "requestId": "i19IPl3Bz6vVK79UQ0LqtU",
  "data": {
   "kind": "qpxexpress#data",
   "airport": [
    {
     "kind": "qpxexpress#airportData",
     "code": "CLT",
     "city": "CLT",
     "name": "Charlotte Douglas"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "DFW",
     "city": "DFW",
     "name": "Dallas/Ft Worth International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "JFK",
     "city": "NYC",
     "name": "New York John F Kennedy International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "ORD",
     "city": "CHI",
     "name": "Chicago O'Hare"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "SFO",
     "city": "SFO",
     "name": "San Francisco International"
    }
   ],
   "city": [
    {
     "kind": "qpxexpress#cityData",
     "code": "CHI",
     "name": "Chicago"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "CLT",
     "name": "Charlotte"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "DFW",
     "name": "Dallas/Fort Worth"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "NYC",
     "name": "New York"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "SFO",
     "name": "San Francisco"
    }
   ],
   "aircraft": [
    {
     "kind": "qpxexpress#aircraftData",
     "code": "320",
     "name": "Airbus A320"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "321",
     "name": "Airbus A321"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "32S",
     "name": "Airbus A320"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "738",
     "name": "Boeing 737"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "757",
     "name": "Boeing 757"
    }
   ],
   "tax": [
    {
     "kind": "qpxexpress#taxData",
     "id": "ZP",
     "name": "US Flight Segment Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "XF",
     "name": "US Passenger Facility Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "US_001",
     "name": "US Transportation Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "AY_001",
     "name": "US September 11th Security Fee"
    }
   ],
   "carrier": [
    {
     "kind": "qpxexpress#carrierData",
     "code": "B6",
     "name": "Jetblue Airways Corporation"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "UA",
     "name": "United Airlines, Inc."
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "US",
     "name": "US Airways, Inc."
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "VX",
     "name": "Virgin America Inc."
    }
   ]
  },
  "tripOption": [
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD176.05",
    "id": "da1vUP49NpJLWm6CiZqffC00A",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 698,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 121,
        "flight": {
         "carrier": "US",
         "number": "2069"
        },
        "id": "GO+AnHpYqeHlrKZb",
        "cabin": "COACH",
        "bookingCode": "O",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LumTnDfOwIKyvDg6",
          "aircraft": "320",
          "arrivalTime": "2015-04-10T14:00-04:00",
          "departureTime": "2015-04-10T11:59-04:00",
          "origin": "JFK",
          "destination": "CLT",
          "originTerminal": "8",
          "duration": 121,
          "onTimePerformance": 64,
          "mileage": 540,
          "secure": true
         }
        ],
        "connectionDuration": 240
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 337,
        "flight": {
         "carrier": "US",
         "number": "1799"
        },
        "id": "G4kqBUZ2kzWZ4rCf",
        "cabin": "COACH",
        "bookingCode": "O",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LZmAUibbk8MhIYhR",
          "aircraft": "321",
          "arrivalTime": "2015-04-10T20:37-07:00",
          "departureTime": "2015-04-10T18:00-04:00",
          "origin": "CLT",
          "destination": "SFO",
          "destinationTerminal": "1",
          "duration": 337,
          "onTimePerformance": 70,
          "mileage": 2290,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AQzc/Kg42pPAgcR5dXf3xR8Um1Mn64RSPkAcbQJP0cY2",
        "carrier": "US",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "OA07ZSJ3"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AQzc/Kg42pPAgcR5dXf3xR8Um1Mn64RSPkAcbQJP0cY2",
        "segmentId": "GO+AnHpYqeHlrKZb",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AQzc/Kg42pPAgcR5dXf3xR8Um1Mn64RSPkAcbQJP0cY2",
        "segmentId": "G4kqBUZ2kzWZ4rCf",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD144.14",
      "saleFareTotal": "USD144.14",
      "saleTaxTotal": "USD31.91",
      "saleTotal": "USD176.05",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD10.81"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD7.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "JFK US X/CLT US SFO Q JFKSFO5.54 138.60OA07ZSJ3 USD 144.14 END ZP JFK CLT XT 10.81US 8.00ZP 5.60AY 7.50XF JFK4.50 CLT3.00",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD211.60",
    "id": "da1vUP49NpJLWm6CiZqffC006",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 556,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 243,
        "flight": {
         "carrier": "US",
         "number": "65"
        },
        "id": "GjynJuPhn0ecw+gD",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LGUXJcUP7kZxDlQ3",
          "aircraft": "738",
          "arrivalTime": "2015-04-10T17:48-05:00",
          "departureTime": "2015-04-10T14:45-04:00",
          "origin": "JFK",
          "destination": "DFW",
          "originTerminal": "8",
          "destinationTerminal": "0",
          "duration": 243,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "mileage": 1388,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 74
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 239,
        "flight": {
         "carrier": "US",
         "number": "2289"
        },
        "id": "GM5Zsk9L2W5UJ09x",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L-LK2C-eH7gSREF2",
          "aircraft": "738",
          "arrivalTime": "2015-04-10T21:01-07:00",
          "departureTime": "2015-04-10T19:02-05:00",
          "origin": "DFW",
          "destination": "SFO",
          "originTerminal": "0",
          "destinationTerminal": "2",
          "duration": 239,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "onTimePerformance": 75,
          "mileage": 1461,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "carrier": "US",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "QA10ZNJ3"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "segmentId": "GM5Zsk9L2W5UJ09x",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "segmentId": "GjynJuPhn0ecw+gD",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD175.81",
      "saleFareTotal": "USD175.81",
      "saleTaxTotal": "USD35.79",
      "saleTotal": "USD211.60",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD13.19"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "JFK US X/DFW US SFO 175.81QA10ZNJ3 USD 175.81 END ZP JFK DFW XT 13.19US 8.00ZP 5.60AY 9.00XF JFK4.50 DFW4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD211.60",
    "id": "da1vUP49NpJLWm6CiZqffC00B",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 647,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 167,
        "flight": {
         "carrier": "US",
         "number": "999"
        },
        "id": "GbW8DJOzdWkru8B6",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LgkjNXVgyABbfVj3",
          "aircraft": "738",
          "arrivalTime": "2015-04-10T09:22-05:00",
          "departureTime": "2015-04-10T07:35-04:00",
          "origin": "JFK",
          "destination": "ORD",
          "originTerminal": "8",
          "destinationTerminal": "3",
          "duration": 167,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "onTimePerformance": 82,
          "mileage": 737,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 188
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 292,
        "flight": {
         "carrier": "US",
         "number": "2352"
        },
        "id": "GH1UV0vN1UIdu4iR",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LPH5C5NrB4hWS66W",
          "aircraft": "738",
          "arrivalTime": "2015-04-10T15:22-07:00",
          "departureTime": "2015-04-10T12:30-05:00",
          "origin": "ORD",
          "destination": "SFO",
          "originTerminal": "3",
          "destinationTerminal": "2",
          "duration": 292,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "mileage": 1841,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "carrier": "US",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "QA10ZNJ3"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "segmentId": "GH1UV0vN1UIdu4iR",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "segmentId": "GbW8DJOzdWkru8B6",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD175.81",
      "saleFareTotal": "USD175.81",
      "saleTaxTotal": "USD35.79",
      "saleTotal": "USD211.60",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD13.19"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "JFK US X/CHI US SFO 175.81QA10ZNJ3 USD 175.81 END ZP JFK ORD XT 13.19US 8.00ZP 5.60AY 9.00XF JFK4.50 ORD4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD211.60",
    "id": "da1vUP49NpJLWm6CiZqffC00C",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 647,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 243,
        "flight": {
         "carrier": "US",
         "number": "65"
        },
        "id": "GjynJuPhn0ecw+gD",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 2,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LGUXJcUP7kZxDlQ3",
          "aircraft": "738",
          "arrivalTime": "2015-04-10T17:48-05:00",
          "departureTime": "2015-04-10T14:45-04:00",
          "origin": "JFK",
          "destination": "DFW",
          "originTerminal": "8",
          "destinationTerminal": "0",
          "duration": 243,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "mileage": 1388,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 167
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 237,
        "flight": {
         "carrier": "US",
         "number": "1127"
        },
        "id": "GI7n9MwrXb2BSoaO",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 2,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LorZ6W9hIG9cqne0",
          "aircraft": "738",
          "arrivalTime": "2015-04-10T22:32-07:00",
          "departureTime": "2015-04-10T20:35-05:00",
          "origin": "DFW",
          "destination": "SFO",
          "originTerminal": "0",
          "destinationTerminal": "2",
          "duration": 237,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "onTimePerformance": 71,
          "mileage": 1461,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "carrier": "US",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "QA10ZNJ3"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "segmentId": "GI7n9MwrXb2BSoaO",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A3P/m9CS3GjRzTmsvE+CDai0Z3YWjPvds17GTTl0T6E/",
        "segmentId": "GjynJuPhn0ecw+gD",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ASSISTIVE DEVICES",
            "count": 0,
            "subcode": "0GM"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "INFANT CAR SEAT",
            "count": 0,
            "description": [
             "Infant Car Seat"
            ],
            "subcode": "0G5"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "STROLLER OR PUSHCHAIR",
            "count": 0,
            "description": [
             "Stroller/Pushchair"
            ],
            "subcode": "0F4"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD175.81",
      "saleFareTotal": "USD175.81",
      "saleTaxTotal": "USD35.79",
      "saleTotal": "USD211.60",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD13.19"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "JFK US X/DFW US SFO 175.81QA10ZNJ3 USD 175.81 END ZP JFK DFW XT 13.19US 8.00ZP 5.60AY 9.00XF JFK4.50 DFW4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD308.10",
    "id": "da1vUP49NpJLWm6CiZqffC001",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 390,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 390,
        "flight": {
         "carrier": "VX",
         "number": "11"
        },
        "id": "GXHjP9zp+ir6kNJ+",
        "cabin": "COACH",
        "bookingCode": "I",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LlzGaPJhAvjNjp5r",
          "aircraft": "320",
          "arrivalTime": "2015-04-10T11:00-07:00",
          "departureTime": "2015-04-10T07:30-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "4",
          "destinationTerminal": "2",
          "duration": 390,
          "onTimePerformance": 77,
          "mileage": 2579,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AAla4w1s/zL3AxV411ukCHImIg6ssFlfc0zvK2LZwUJ2",
        "carrier": "VX",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "I7QNR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AAla4w1s/zL3AxV411ukCHImIg6ssFlfc0zvK2LZwUJ2",
        "segmentId": "GXHjP9zp+ir6kNJ+",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD273.49",
      "saleFareTotal": "USD273.49",
      "saleTaxTotal": "USD34.61",
      "saleTotal": "USD308.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD20.51"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC VX SFO 273.49I7QNR USD 273.49 END ZP JFK XT 20.51US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD308.10",
    "id": "da1vUP49NpJLWm6CiZqffC004",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 401,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 401,
        "flight": {
         "carrier": "B6",
         "number": "615"
        },
        "id": "GVuMSjdyKt+Dsd+V",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LsIGPUFnU8z5L66C",
          "aircraft": "32S",
          "arrivalTime": "2015-04-10T13:11-07:00",
          "departureTime": "2015-04-10T09:30-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "5",
          "destinationTerminal": "I",
          "duration": 401,
          "onTimePerformance": 60,
          "mileage": 2579,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "carrier": "B6",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "WH07AE2U"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "segmentId": "GVuMSjdyKt+Dsd+V",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 1,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           }
          ],
          "pieces": 1
         }
        ]
       }
      ],
      "baseFareTotal": "USD273.49",
      "saleFareTotal": "USD273.49",
      "saleTaxTotal": "USD34.61",
      "saleTotal": "USD308.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD20.51"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC B6 SFO 273.49WH07AE2U USD 273.49 END ZP JFK XT 20.51US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD308.10",
    "id": "da1vUP49NpJLWm6CiZqffC005",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 408,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 408,
        "flight": {
         "carrier": "B6",
         "number": "915"
        },
        "id": "G9RFzntLQlUz+UgY",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LBQ3AxbSAkry-us+",
          "aircraft": "32S",
          "arrivalTime": "2015-04-10T23:48-07:00",
          "departureTime": "2015-04-10T20:00-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "5",
          "destinationTerminal": "I",
          "duration": 408,
          "onTimePerformance": 70,
          "mileage": 2579,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "carrier": "B6",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "WH07AE2U"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "segmentId": "G9RFzntLQlUz+UgY",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 1,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           }
          ],
          "pieces": 1
         }
        ]
       }
      ],
      "baseFareTotal": "USD273.49",
      "saleFareTotal": "USD273.49",
      "saleTaxTotal": "USD34.61",
      "saleTotal": "USD308.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD20.51"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC B6 SFO 273.49WH07AE2U USD 273.49 END ZP JFK XT 20.51US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD308.10",
    "id": "da1vUP49NpJLWm6CiZqffC002",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 393,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 393,
        "flight": {
         "carrier": "B6",
         "number": "1415"
        },
        "id": "GpZq64VdKn1eJVEJ",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LuhxKfBDqSNTcAk-",
          "aircraft": "32S",
          "arrivalTime": "2015-04-10T15:02-07:00",
          "departureTime": "2015-04-10T11:29-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "5",
          "destinationTerminal": "I",
          "duration": 393,
          "onTimePerformance": 70,
          "mileage": 2579,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "carrier": "B6",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "WH07AE2U"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "segmentId": "GpZq64VdKn1eJVEJ",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 1,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           }
          ],
          "pieces": 1
         }
        ]
       }
      ],
      "baseFareTotal": "USD273.49",
      "saleFareTotal": "USD273.49",
      "saleTaxTotal": "USD34.61",
      "saleTotal": "USD308.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD20.51"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC B6 SFO 273.49WH07AE2U USD 273.49 END ZP JFK XT 20.51US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD308.10",
    "id": "da1vUP49NpJLWm6CiZqffC003",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 400,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 400,
        "flight": {
         "carrier": "B6",
         "number": "15"
        },
        "id": "GBTEvANco0TAwRr4",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L1RJYP0TaPyZM7t+",
          "aircraft": "32S",
          "arrivalTime": "2015-04-10T10:39-07:00",
          "departureTime": "2015-04-10T06:59-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "5",
          "destinationTerminal": "I",
          "duration": 400,
          "onTimePerformance": 60,
          "mileage": 2579,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "carrier": "B6",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "WH07AE2U"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ACfwMap7UAfaXZ6CpIy+BUgrEt55fJ1/kFv3akkL5DtY",
        "segmentId": "GBTEvANco0TAwRr4",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 1,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           }
          ],
          "pieces": 1
         }
        ]
       }
      ],
      "baseFareTotal": "USD273.49",
      "saleFareTotal": "USD273.49",
      "saleTaxTotal": "USD34.61",
      "saleTotal": "USD308.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD20.51"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC B6 SFO 273.49WH07AE2U USD 273.49 END ZP JFK XT 20.51US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD358.10",
    "id": "da1vUP49NpJLWm6CiZqffC007",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 385,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 385,
        "flight": {
         "carrier": "UA",
         "number": "541"
        },
        "id": "GoKW1cKx7tS2+2wn",
        "cabin": "COACH",
        "bookingCode": "V",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LZiLHajnLgToSnUc",
          "aircraft": "757",
          "arrivalTime": "2015-04-10T12:05-07:00",
          "departureTime": "2015-04-10T08:40-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 385,
          "mileage": 2579,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ArHRa/pBZJcVKa/TBkuzQ8NY6BTHGbCkUgxzyruFLmR6",
        "carrier": "UA",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "VAA07AGN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ArHRa/pBZJcVKa/TBkuzQ8NY6BTHGbCkUgxzyruFLmR6",
        "segmentId": "GoKW1cKx7tS2+2wn",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 0,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "MUSICAL INSTRUMENTS",
            "count": 0,
            "subcode": "0F2"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ARCHERY EQUIPMENT",
            "count": 0,
            "description": [
             "Archery Equipment"
            ],
            "subcode": "0FO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "BOWLING EQUIPMENT",
            "count": 0,
            "description": [
             "Bowling Equipment"
            ],
            "subcode": "0FS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "FISHING EQUIPMENT",
            "count": 0,
            "description": [
             "Fishing Equipment"
            ],
            "subcode": "0D6"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "GOLF EQUIPMENT",
            "count": 0,
            "description": [
             "Golf Equipment"
            ],
            "subcode": "0DC"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "HOCKEY EQUIPMENT",
            "count": 0,
            "description": [
             "Hockey Equipment"
            ],
            "subcode": "0F0"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKATEBOARD",
            "count": 0,
            "description": [
             "Skateboard"
            ],
            "subcode": "0IS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Ski Equipment"
            ],
            "subcode": "0DD"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "WATER SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Water Ski Equipment"
            ],
            "subcode": "0G2"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD320.00",
      "saleFareTotal": "USD320.00",
      "saleTaxTotal": "USD38.10",
      "saleTotal": "USD358.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD24.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC UA SFO 320.00VAA07AGN USD 320.00 END ZP JFK XT 24.00US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD358.10",
    "id": "da1vUP49NpJLWm6CiZqffC009",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 390,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 390,
        "flight": {
         "carrier": "VX",
         "number": "23"
        },
        "id": "GafksouBbCda7ZDT",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 5,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LRGLGemBOIFFdzUg",
          "aircraft": "320",
          "arrivalTime": "2015-04-10T14:00-07:00",
          "departureTime": "2015-04-10T10:30-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "4",
          "destinationTerminal": "2",
          "duration": 390,
          "onTimePerformance": 77,
          "mileage": 2579,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AdzBhAexh5xQQw3G/NH6y6Kgao+NodbuPyyxZk2Ue3AI",
        "carrier": "VX",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "M7QNR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AdzBhAexh5xQQw3G/NH6y6Kgao+NodbuPyyxZk2Ue3AI",
        "segmentId": "GafksouBbCda7ZDT",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD320.00",
      "saleFareTotal": "USD320.00",
      "saleTaxTotal": "USD38.10",
      "saleTotal": "USD358.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD24.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC VX SFO 320.00M7QNR USD 320.00 END ZP JFK XT 24.00US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD358.10",
    "id": "da1vUP49NpJLWm6CiZqffC008",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 387,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 387,
        "flight": {
         "carrier": "UA",
         "number": "415"
        },
        "id": "GDvkd0wdu4odWNVJ",
        "cabin": "COACH",
        "bookingCode": "V",
        "bookingCodeCount": 6,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LSGBHJ7veKYpYDQq",
          "aircraft": "757",
          "arrivalTime": "2015-04-10T09:27-07:00",
          "departureTime": "2015-04-10T06:00-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 387,
          "onTimePerformance": 80,
          "mileage": 2579,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ArHRa/pBZJcVKa/TBkuzQ8NY6BTHGbCkUgxzyruFLmR6",
        "carrier": "UA",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "VAA07AGN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ArHRa/pBZJcVKa/TBkuzQ8NY6BTHGbCkUgxzyruFLmR6",
        "segmentId": "GDvkd0wdu4odWNVJ",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 0,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "MUSICAL INSTRUMENTS",
            "count": 0,
            "subcode": "0F2"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ARCHERY EQUIPMENT",
            "count": 0,
            "description": [
             "Archery Equipment"
            ],
            "subcode": "0FO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "BOWLING EQUIPMENT",
            "count": 0,
            "description": [
             "Bowling Equipment"
            ],
            "subcode": "0FS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "FISHING EQUIPMENT",
            "count": 0,
            "description": [
             "Fishing Equipment"
            ],
            "subcode": "0D6"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "GOLF EQUIPMENT",
            "count": 0,
            "description": [
             "Golf Equipment"
            ],
            "subcode": "0DC"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "HOCKEY EQUIPMENT",
            "count": 0,
            "description": [
             "Hockey Equipment"
            ],
            "subcode": "0F0"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKATEBOARD",
            "count": 0,
            "description": [
             "Skateboard"
            ],
            "subcode": "0IS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Ski Equipment"
            ],
            "subcode": "0DD"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "WATER SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Water Ski Equipment"
            ],
            "subcode": "0G2"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD320.00",
      "saleFareTotal": "USD320.00",
      "saleTaxTotal": "USD38.10",
      "saleTotal": "USD358.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD24.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC UA SFO 320.00VAA07AGN USD 320.00 END ZP JFK XT 24.00US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD408.10",
    "id": "da1vUP49NpJLWm6CiZqffC00F",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 405,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 405,
        "flight": {
         "carrier": "UA",
         "number": "510"
        },
        "id": "GeMqJDFQiFNP-gE1",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L+GQhqZKL03egVF1",
          "aircraft": "757",
          "arrivalTime": "2015-04-10T19:15-07:00",
          "departureTime": "2015-04-10T15:30-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 405,
          "onTimePerformance": 80,
          "mileage": 2579,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aa1JUYkzCSUCqKW/QZxfp4Y1OhNky1tdVgUrNp37pTOE",
        "carrier": "UA",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "QAA03AGN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aa1JUYkzCSUCqKW/QZxfp4Y1OhNky1tdVgUrNp37pTOE",
        "segmentId": "GeMqJDFQiFNP-gE1",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 0,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "MUSICAL INSTRUMENTS",
            "count": 0,
            "subcode": "0F2"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ARCHERY EQUIPMENT",
            "count": 0,
            "description": [
             "Archery Equipment"
            ],
            "subcode": "0FO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "BOWLING EQUIPMENT",
            "count": 0,
            "description": [
             "Bowling Equipment"
            ],
            "subcode": "0FS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "FISHING EQUIPMENT",
            "count": 0,
            "description": [
             "Fishing Equipment"
            ],
            "subcode": "0D6"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "GOLF EQUIPMENT",
            "count": 0,
            "description": [
             "Golf Equipment"
            ],
            "subcode": "0DC"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "HOCKEY EQUIPMENT",
            "count": 0,
            "description": [
             "Hockey Equipment"
            ],
            "subcode": "0F0"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKATEBOARD",
            "count": 0,
            "description": [
             "Skateboard"
            ],
            "subcode": "0IS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Ski Equipment"
            ],
            "subcode": "0DD"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "WATER SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Water Ski Equipment"
            ],
            "subcode": "0G2"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD366.51",
      "saleFareTotal": "USD366.51",
      "saleTaxTotal": "USD41.59",
      "saleTotal": "USD408.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD27.49"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC UA SFO 366.51QAA03AGN USD 366.51 END ZP JFK XT 27.49US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD408.10",
    "id": "da1vUP49NpJLWm6CiZqffC00E",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 405,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 405,
        "flight": {
         "carrier": "UA",
         "number": "257"
        },
        "id": "GfLrK4+dkNYj7NTh",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 2,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LYas4eLihTpJb3QG",
          "aircraft": "757",
          "arrivalTime": "2015-04-10T17:45-07:00",
          "departureTime": "2015-04-10T14:00-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 405,
          "onTimePerformance": 90,
          "mileage": 2579,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aa1JUYkzCSUCqKW/QZxfp4Y1OhNky1tdVgUrNp37pTOE",
        "carrier": "UA",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "QAA03AGN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aa1JUYkzCSUCqKW/QZxfp4Y1OhNky1tdVgUrNp37pTOE",
        "segmentId": "GfLrK4+dkNYj7NTh",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 0,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "MUSICAL INSTRUMENTS",
            "count": 0,
            "subcode": "0F2"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ARCHERY EQUIPMENT",
            "count": 0,
            "description": [
             "Archery Equipment"
            ],
            "subcode": "0FO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "BOWLING EQUIPMENT",
            "count": 0,
            "description": [
             "Bowling Equipment"
            ],
            "subcode": "0FS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "FISHING EQUIPMENT",
            "count": 0,
            "description": [
             "Fishing Equipment"
            ],
            "subcode": "0D6"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "GOLF EQUIPMENT",
            "count": 0,
            "description": [
             "Golf Equipment"
            ],
            "subcode": "0DC"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "HOCKEY EQUIPMENT",
            "count": 0,
            "description": [
             "Hockey Equipment"
            ],
            "subcode": "0F0"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKATEBOARD",
            "count": 0,
            "description": [
             "Skateboard"
            ],
            "subcode": "0IS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Ski Equipment"
            ],
            "subcode": "0DD"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "WATER SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Water Ski Equipment"
            ],
            "subcode": "0G2"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD366.51",
      "saleFareTotal": "USD366.51",
      "saleTaxTotal": "USD41.59",
      "saleTotal": "USD408.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD27.49"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC UA SFO 366.51QAA03AGN USD 366.51 END ZP JFK XT 27.49US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD408.10",
    "id": "da1vUP49NpJLWm6CiZqffC00D",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 396,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 396,
        "flight": {
         "carrier": "UA",
         "number": "514"
        },
        "id": "GWpM9+1QJm2h+Hy5",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L8Y5NqZfzEKZ5PSl",
          "aircraft": "757",
          "arrivalTime": "2015-04-10T22:06-07:00",
          "departureTime": "2015-04-10T18:30-04:00",
          "origin": "JFK",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 396,
          "onTimePerformance": 70,
          "mileage": 2579,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aa1JUYkzCSUCqKW/QZxfp4Y1OhNky1tdVgUrNp37pTOE",
        "carrier": "UA",
        "origin": "NYC",
        "destination": "SFO",
        "basisCode": "QAA03AGN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aa1JUYkzCSUCqKW/QZxfp4Y1OhNky1tdVgUrNp37pTOE",
        "segmentId": "GWpM9+1QJm2h+Hy5",
        "freeBaggageOption": [
         {
          "kind": "qpxexpress#freeBaggageAllowance",
          "bagDescriptor": [
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
            "count": 0,
            "description": [
             "Up to 50 lb/23 kg",
             "Up to 62 li/158 lcm"
            ],
            "subcode": "0GO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "MUSICAL INSTRUMENTS",
            "count": 0,
            "subcode": "0F2"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "ARCHERY EQUIPMENT",
            "count": 0,
            "description": [
             "Archery Equipment"
            ],
            "subcode": "0FO"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "BOWLING EQUIPMENT",
            "count": 0,
            "description": [
             "Bowling Equipment"
            ],
            "subcode": "0FS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "FISHING EQUIPMENT",
            "count": 0,
            "description": [
             "Fishing Equipment"
            ],
            "subcode": "0D6"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "GOLF EQUIPMENT",
            "count": 0,
            "description": [
             "Golf Equipment"
            ],
            "subcode": "0DC"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "HOCKEY EQUIPMENT",
            "count": 0,
            "description": [
             "Hockey Equipment"
            ],
            "subcode": "0F0"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKATEBOARD",
            "count": 0,
            "description": [
             "Skateboard"
            ],
            "subcode": "0IS"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Ski Equipment"
            ],
            "subcode": "0DD"
           },
           {
            "kind": "qpxexpress#bagDescriptor",
            "commercialName": "WATER SKI EQUIPMENT",
            "count": 0,
            "description": [
             "Water Ski Equipment"
            ],
            "subcode": "0G2"
           }
          ],
          "pieces": 0
         }
        ]
       }
      ],
      "baseFareTotal": "USD366.51",
      "saleFareTotal": "USD366.51",
      "saleTaxTotal": "USD41.59",
      "saleTotal": "USD408.10",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD27.49"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.00"
       }
      ],
      "fareCalculation": "NYC UA SFO 366.51QAA03AGN USD 366.51 END ZP JFK XT 27.49US 4.00ZP 5.60AY 4.50XF JFK4.50",
      "latestTicketingTime": "2015-03-31T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   }
  ]
 }
}