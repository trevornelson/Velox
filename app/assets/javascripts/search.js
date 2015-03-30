myAppModule.controller('SearchController', ['$scope', '$rootScope', 'searchFactory', 'userSession',
    function($scope, $rootScope, searchFactory, userSession) {

      userSession.checkSession().success(function(data) {
        $rootScope.user = data;
      });

      $scope.show_input = true;
      $scope.show_filter = false;
      $scope.show_flight_results = true;

      searchFactory.buildSearch();

      $scope.submit = function() {
        $rootScope.search = searchFactory.search;
        console.log($rootScope.search);
      };

      var substringMatcher = function(str_array) {
        return function findMatches(q, cb) {
          var matches, substrRegex;

          matches = [];

          substrRegex = new RegExp(q, 'i');

          $.each(str_array, function(i, str) {
            if (substrRegex.test(str)) {
              matches.push({ value: str });
            }
          });

          cb(matches);
        };
      };

      var autocomplete_array = ['Kahului','Youngstown','Youngstown','Ogdensburg','Spokane','Grand Forks','Oklahoma City','Detroit','Yakima','Grand Junction','Yakutat','Kobuk','Galena','Gambell','Jacksonville NC','Oakland','Garden City','Gillette','Fort Smith','Sioux Falls','Kotzebue','Fort Wayne','Oxnard','Fort Yukon','Ontario','Toksook Bay','Fort Myers','Farmington','Old Harbor','Wolf Point','Fort Lauderdale','Nome','Flagstaff','Omaha','Florence','Noorvik','Norfolk','Chicago','Port Lions','Worcester','Flint','Fort Collins','Friday Harbor','Miami','Bentonville','Page','Hilton Head','Greenville','Hibbing','Panama City','St. Petersburg','Peoria','Hattiesburg/Laurel','Phoenix','Pittsburgh','Pierre','Pilot Point','Newport News','Philadelphia','Point Hope','Helena','Flagler','Point Lay','Cold Bay','Healy','PADUCAH','Hayden','West Palm Beach','Plattsburgh','Portland','Pelican','Holy Cross','Pedro Bay','Portland','Chicago-Wheeling','Gunnison','Noatak','Tuntutuliak','North Whale Pass','Newtok','Pensacola','Goodnews Bay','Gainesville','Washington County','Westsound','South Naknek','Port Protection','Golovin','Worland','Pilot Station','Presque Isle','Wrangell','Greenville','White Mountain','Great Falls','Greenville','Greensboro','Prescott','Gustavus','Selawik','Petersburg','Grand Rapids','Pasco','Palm Springs','Port Moller','Green Bay','Pueblo','Port Heiden','Pullman','Provincetown','Providence','Gulfport','Wilmington','Wilmington','Iliamna','Indianapolis','Winston-salem','International Falls','Nikolski','Idaho Falls','Bullhead','Igiugig','Niagara Falls','Washington','Kiana','Houston','Wichita','New Haven','Havre','Hays','Hydaburg','Barnstable','Hollis','Huntsville','Huslia','Harlingen','Hughes','Huntington','Newark','Homer','Huron','Houston','Hooper Bay','Hoonah','Honolulu','Hana','Haines','White Plains','Rochester','Roanoke VA','Reno','New York','Juneau','Rock Springs','Rockland','Joplin','Riverton WY','Rampart','Lahania-kapalua','Rockford','Richmond','New York','Riverside','Grand Canyon','Rhinelander','Ruby','Roche Harbor','Jefferson City','Rapid City','Red Devil','Jacksonville','Raleigh-durham','Redmond-Bend','Jackson','Jacksn Hole','Santa Barbara','South Bend','San Diego','San Antonio','Savannah','Deadhorse','State College','Stockton','Scammon Bay','San Luis Obispo','Salisbury','Ironwood','Hilo','Islip','Williston','Kinston','Ithaca','Yuma','Rosario','Russian Mission','Fort Myers','Rochester','Circle','Williamsport','Rutland','Barter Island','Butte','Arctic Village','Barrow','Minocqua - Woodruff','Watertown','Buffalo','Atqasuk','Atlanta','Burbank','Baton Rouge','Bettles','Burlington','Austin','Augusta','Alakanuk','Knoxville','Austin TX','Watertown','Appleton','Scranton','Baltimore','Asheville','Bozeman','Twin Hills','Traverse City','Kalamazoo','Brich Creek','Akron','Colombia','Coffman Cove','Chignik Lake','Chignik Lagoon','Kaltag','Tallahassee','Tatalina','Grayling','Tuluksak','Teller','Koliganek','False Pass','Stratford','Ekwok','Atlantic City','Nantucket','Windsor Locks','Albuquerque','Aberdeen','Bethel','Allentown','Ambler','Tenakee Springs','Abilene','Allakaket','Bakersfield','Kongiganak','Koyuk','Scottsbluff','Kitoi Bay','Seattle','Bar Harbor','Kodiak','Binghamton','Adak Island','Bangor','Block Island','Angoon','Bush Field','Telluride','Birmingham','Fort Worth','Bismarck','Billings','Wainwright','Bemidji','Kotlik','Ouzinkie','Olga Bay','Buckland','Port Clarence','Point Baker','Cleveland','Tulsa','Tucson','New Stuyahok','Kona','Alliance','Bellingham','Akhiok','Anaktuvuk Pass','King Salmon','Manokotak','Belleville','BRISTOL','Moser Bay','Albany','Bloomington','Kalskag','Larsen Bay','Levelock','Nashville','New York','Klawock','Atka','Akiak','Tampa','St Marys','Thorne Bay','Aniak','Boise','Anchorage','Bartow','Lazy Bay','Alamosa','Waterloo','Boston','Amarillo','Tin City','Beaumont','Amook Bay','Denver','Naples','Tununak','Anvik','Port Williams','Togiak Village','Kipnuk','Burlington','Brownsville','Akutan','Port Bailey','Perryville','Toledo','Brevig Mission','Syracuse','Ketchikan','King Cove','Seal Bay','Nunam Iqua','Wassau','Kasigluk','Kwigillingok','Clovis','Cincinnati','Kivalina','Kwethluk','West Point','Quinhagak','Savoonga','Karluk','Zachar Bay','Saint Cloud','Koyukuk','St. George','St. Louis','Chisana','Newburgh','Chefornak','Cheyenne','Silver City','Dallas','Fort Leonardwood','Daytona Beach','Dayton','Tatitlek','Teterboro','Takotna','Las Vegas','Laramie','Lansing','Decatur','Los Angeles','Lubbock','Denver','North Platte','Liberal','Dodge City','Columbus','Washington','Tanana','Lebanon','Lexington KY','Sheridan','Craig','Shishmaref','Shungnak','Skagway','Long Beach','New York','Sitka','Chattanooga','Lafayette','Cape Girardeau','Shageluk','Shreveport','San Angelo','Chadron','Cordova','Caldwell','Little Rock','Lihue','San Jose','Cold Bay','Cortez','Shaktoolik','Central','Louisville','Crooked Creek','Sand Point','Clarksburg','Seattle','Cleveland','Carlsbad','Seattle','Sidney','Chuathbaluk','San Francisco','Cedar Rapids','Charlottesville VA','Charleston','Sanford','Springfield','Chalkyitsik','Moab','Springfield','San Luis','Wichita Falls','Louisville','Columbia','Lincoln','Colorado Springs','Lanai','Charlotte','Port Angeles','Laredo','Columbus','Sarasota','Stony River','Lopez','Hancock','Corpus Christi','Salt Lake City','Charleston','Salina','Saranac Lake','Sleetmute','Sacramento','Salmon','St. Michael','Santa Maria','La Crosse','Molokai','Santa Ana','Cape Lisburne','St. Paul Island','Show Low','Beaver','Lynchburg','Stebbins','Wales','Lewisburg','Lewistown','Lewiston','Medford','Mcallen','Eek','MONTGOMERY','Harrisburg','Eagle River','Egegik','Vail','Memphis','Chicago','Kearney','Aleknagik','Manistee','Saginaw','Eau Claire','Eagle','McCook','Kansas City','Mcgrath','Orlando','Merced','Midland','Mobile','Modesto','Mountain Village','Minot','Dillingham','Minto','Duluth','Visalia','Marshall','Moline','Melbourne','Manley Hot Springs','Milwaukee','Molokai','Dallas-Fort Worth','Valparaiso','Miami','Dickinson','Sacramento','Manhattan','Manchester NH','Des Moines','Durango','Vineyard Haven MA','Marion','Detroit','Kamuela','Metakatla','Unalaska','Montrose CO','New Orleans','Minneapolis','Missoula','Madison','Massena','Monterey','Deering','Fairbanks','Fargo','Fresno','Fayetteville','Mekoryuk','McCall','Myrtle Beach','Key West','Chevak','Venetie','Vernal','Valdez','Jacksonville','Nikolai','Victorville','Chenega','Kalispell','Kenosha','Nondalton','Quincy','Elim','Elmira','El Paso','Elfin Cove','Ely','Emmonak','Kenai','Nightmute','Unalakleet','Nelson Lagoon','New Bedford','New Bern','Evansville','Newark','Eugene','Eastsound','Nunapitchuk','Nuiqsut','Nulato','Erie',]


      $('#depart-autocomplete').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'states',
        displayKey: 'value',
        source: substringMatcher(autocomplete_array)
      });
    }
  ]);

myAppModule.factory('searchFactory', ['$http', function($http) {

    var factory = {};

    factory.search;

    factory.buildSearch = function() {
      factory.search = new Search();
    };

    factory.buildLocation = function(args) {
      return new Location(args);
    };

    factory.fetchAirport = function(airport_name) {
      var airport_object;
      autocomplete_source.forEach(function(el, i, arr) {
        if (arr[i].city === airport_name) {
          airport_object = arr[i].city;
        }
      });
      return airport_object;
    };

    var Location = function(args) {
      this.name = args.name;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    var Search = function() {
      this.depart_location = {};
      this.arrival_location = {};
      this.depart_date = "2015-07-12";
      this.return_date = "2015-07-12";
    };

    return factory;
  }
]);


