export const TOURNAMENTS = {
    PREMIER_LEAGUE:{
        id : 1,
        order:73,
        name:"Premier League",
        uniqueName:"Premier League",
        hasEventPlayerStatistics:true,
        hasEventPlayerHeatMap:null,
        hasBoxScore:null,
        isActive:false,
        uniqueId:17,
        vi_name: "Ngoại Hạng Anh"
    },
    FA_CUP:{
        id:16,
        order:64,
        name:"FA Cup",
        uniqueName:"FA Cup",
        hasEventPlayerStatistics:false,
        hasEventPlayerHeatMap:null,
        hasBoxScore:null,
        isActive:false,
        uniqueId:19,
    },
    FA_CUP_QUALIFI:{
        id: 34954,
        order: 63,
        name: "FA Cup, Qualification",
        uniqueName: "FA Cup, Qualification",
        hasEventPlayerStatistics: false,
        hasEventPlayerHeatMap: null,
        hasBoxScore: null,
        isActive: false,
        uniqueId: 1696,
      },
    LEAGUE_TROPHY:{
        id:161,
        order:61,
        name:"Football League Trophy",
        uniqueName:"Football League Trophy",
        hasEventPlayerStatistics:true,
        hasEventPlayerHeatMap:null,
        hasBoxScore:null,
        isActive:false,
        uniqueId:334,
        vi_name: "Cúp Liên Đoàn"
    },
    LA_LIGA:{
        id: 36,
        order: 84,
        name: "LaLiga",
        uniqueName: "LaLiga",
        hasEventPlayerStatistics: true,
        hasEventPlayerHeatMap: null,
        hasBoxScore: null,
        isActive: false,
        uniqueId: 8
      },
    COPA_DEL_REY:{
        id: 150,
        order: 32,
        name: "Copa del Rey",
        uniqueName: "Copa del Rey",
        hasEventPlayerStatistics: false,
        hasEventPlayerHeatMap: null,
        hasBoxScore: null,
        isActive: false,
        uniqueId: 329,
        vi_name: "Cúp Nhà Vua TBN"
      },
}

export const UNIQUE_TOURNAMENT_IDS = [17,19,1696,334,8,23,35]

export const UNIQUE_TOURNAMENT_LIST = {
      uniqueTournaments: [
        {
          name: "FA Cup",
          slug: "fa-cup",
          category: {
            name: "England",
            slug: "england",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1,
            flag: "england"
          },
          userCount: 237392,
          id: 19,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "K League 1",
          slug: "k-league-1",
          category: {
            name: "South Korea",
            slug: "south-korea",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 291,
            flag: "south-korea"
          },
          userCount: 11444,
          id: 410,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "J1 League",
          slug: "j1-league",
          category: {
            name: "Japan",
            slug: "japan",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 52,
            flag: "japan"
          },
          userCount: 20470,
          id: 196,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "V-League 1",
          slug: "v-league-1",
          category: {
            name: "Vietnam",
            slug: "vietnam",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 366,
            flag: "vietnam"
          },
          userCount: 4102,
          id: 626,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "European Championship",
          slug: "european-championship",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 407398,
          id: 1,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Copa América",
          slug: "copa-america",
          category: {
            name: "South America",
            slug: "south-america",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1470,
            flag: "south-america"
          },
          userCount: 220020,
          id: 133,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship",
          slug: "world-championship",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1468,
            flag: "international"
          },
          userCount: 1200331,
          id: 16,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "UEFA Champions League",
          slug: "uefa-champions-league",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 1216505,
          id: 7,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "UEFA Europa League",
          slug: "uefa-europa-league",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 584326,
          id: 679,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "European Championship, Qualification",
          slug: "european-championship-qualification",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 150891,
          id: 27,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Premier League",
          slug: "premier-league",
          category: {
            name: "England",
            slug: "england",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1,
            flag: "england",
            "alpha2": "EN"
          },
          userCount: 1227607,
          id: 17,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LaLiga",
          slug: "laliga",
          category: {
            name: "Spain",
            slug: "spain",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 32,
            flag: "spain",
            "alpha2": "ES"
          },
          userCount: 822645,
          id: 8,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Copa del Rey",
          slug: "copa-del-rey",
          category: {
            name: "Spain",
            slug: "spain",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 32,
            flag: "spain",
            "alpha2": "ES"
          },
          userCount: 173568,
          id: 329,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Bundesliga",
          slug: "bundesliga",
          category: {
            name: "Germany",
            slug: "germany",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 30,
            flag: "germany",
            "alpha2": "DE"
          },
          userCount: 565647,
          id: 35,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Serie A",
          slug: "serie-a",
          category: {
            name: "Italy",
            slug: "italy",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 31,
            flag: "italy",
            "alpha2": "IT"
          },
          userCount: 688461,
          id: 23,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NBA All Star Game",
          slug: "nba-all-star-game",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 15,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 52960,
          id: 875,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 56,
            flag: "international"
          },
          userCount: 7542,
          id: 272,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Ligue 1",
          slug: "ligue-1",
          category: {
            name: "France",
            slug: "france",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 7,
            flag: "france",
            "alpha2": "FR"
          },
          userCount: 510980,
          id: 34,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NBA",
          slug: "nba",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 15,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 236568,
          id: 132,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "World Championship",
          slug: "world-championship",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 56,
            flag: "international"
          },
          userCount: 14842,
          id: 3,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 56,
            flag: "international"
          },
          userCount: 2412,
          id: 273,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Euroleague",
          slug: "euroleague",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 51338,
          id: 138,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship",
          slug: "world-championship",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 73,
            flag: "international"
          },
          userCount: 31332,
          id: 77,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NHL",
          slug: "nhl",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 37,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 25096,
          id: 234,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "FIBA EuroBasket",
          slug: "fiba-eurobasket",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 26706,
          id: 285,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "European Championship",
          slug: "european-championship",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 73,
            flag: "international"
          },
          userCount: 19292,
          id: 160,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NHL Preseason",
          slug: "nhl-preseason",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 37,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 2873,
          id: 957,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "FIBA World Cup",
          slug: "fiba-world-cup",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 23804,
          id: 441,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Champions League",
          slug: "champions-league",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 73,
            flag: "international"
          },
          userCount: 17156,
          id: 30,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Nations League",
          slug: "nations-league",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 14659,
          id: 11093,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ICC World Cup",
          slug: "icc-world-cup",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Cricket",
              slug: "cricket",
              id: 62
            },
            id: 1343,
            flag: "international"
          },
          userCount: 15186,
          id: 11184,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Bundesliga",
          slug: "bundesliga",
          category: {
            name: "Germany",
            slug: "germany",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 53,
            flag: "germany",
            "alpha2": "DE"
          },
          userCount: 14115,
          id: 149,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "KHL",
          slug: "khl",
          category: {
            name: "Russia",
            slug: "russia",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 101,
            flag: "russia",
            "alpha2": "RU"
          },
          userCount: 8923,
          id: 268,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Nations League, Women",
          slug: "nations-league-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 7850,
          id: 11094,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Australian Open",
          slug: "australian-open",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 43462,
          id: 2363,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Indian Premier League",
          slug: "indian-premier-league",
          category: {
            name: "India",
            slug: "india",
            sport: {
              name: "Cricket",
              slug: "cricket",
              id: 62
            },
            id: 1350,
            flag: "india",
            "alpha2": "IN"
          },
          userCount: 36710,
          id: 11165,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Six Nations",
          slug: "six-nations",
          category: {
            name: "Rugby Union",
            slug: "rugby-union",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 82,
            flag: "rugby-union"
          },
          userCount: 22361,
          id: 423,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Australian Open",
          slug: "australian-open",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 13646,
          id: 2571,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Champions League",
          slug: "champions-league",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 10578,
          id: 586,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Roland Garros",
          slug: "roland-garros",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 47886,
          id: 2480,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Roland Garros",
          slug: "roland-garros",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 13734,
          id: 2577,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "T20 International",
          slug: "t20-international",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Cricket",
              slug: "cricket",
              id: 62
            },
            id: 1343,
            flag: "international"
          },
          userCount: 10796,
          id: 11191,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "DEL",
          slug: "del",
          category: {
            name: "Germany",
            slug: "germany",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 41,
            flag: "germany",
            "alpha2": "DE"
          },
          userCount: 5930,
          id: 225,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "A1",
          slug: "a1",
          category: {
            name: "Greece",
            slug: "greece",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 108,
            flag: "greece",
            "alpha2": "GR"
          },
          userCount: 5723,
          id: 304,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Superliga",
          slug: "superliga",
          category: {
            name: "Brazil",
            slug: "brazil",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 373,
            flag: "brazil",
            "alpha2": "BR"
          },
          userCount: 5626,
          id: 1452,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LNF",
          slug: "lnf",
          category: {
            name: "Brazil",
            slug: "brazil",
            sport: {
              name: "Futsal",
              slug: "futsal",
              id: 29
            },
            id: 202,
            flag: "brazil",
            "alpha2": "BR"
          },
          userCount: 5014,
          id: 650,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Super Rugby",
          slug: "super-rugby",
          category: {
            name: "Rugby Union",
            slug: "rugby-union",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 82,
            flag: "rugby-union"
          },
          userCount: 4347,
          id: 422,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LNH Division 1",
          slug: "lnh-division-1",
          category: {
            name: "France",
            slug: "france",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 121,
            flag: "france",
            "alpha2": "FR"
          },
          userCount: 3569,
          id: 159,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Wimbledon",
          slug: "wimbledon",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 47467,
          id: 2361,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Serie A",
          slug: "serie-a",
          category: {
            name: "Italy",
            slug: "italy",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 107,
            flag: "italy",
            "alpha2": "IT"
          },
          userCount: 19945,
          id: 262,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "MLB",
          slug: "mlb",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "Baseball",
              slug: "baseball",
              id: 64
            },
            id: 1374,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 15360,
          id: 11205,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "Wimbledon",
          slug: "wimbledon",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 14871,
          id: 2600,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "One Day International",
          slug: "one-day-international",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Cricket",
              slug: "cricket",
              id: 62
            },
            id: 1343,
            flag: "international"
          },
          userCount: 9870,
          id: 11190,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Superliga, Women",
          slug: "superliga-women",
          category: {
            name: "Brazil",
            slug: "brazil",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 373,
            flag: "brazil",
            "alpha2": "BR"
          },
          userCount: 5931,
          id: 1468,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "France - Top 14",
          slug: "france-top-14",
          category: {
            name: "Rugby Union",
            slug: "rugby-union",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 82,
            flag: "rugby-union"
          },
          userCount: 5374,
          id: 420,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Primera División",
          slug: "primera-division",
          category: {
            name: "Spain",
            slug: "spain",
            sport: {
              name: "Futsal",
              slug: "futsal",
              id: 29
            },
            id: 183,
            flag: "spain",
            "alpha2": "ES"
          },
          userCount: 3031,
          id: 593,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Liiga",
          slug: "liiga",
          category: {
            name: "Finland",
            slug: "finland",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 40,
            flag: "finland",
            "alpha2": "FI"
          },
          userCount: 2155,
          id: 134,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "US Open",
          slug: "us-open",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 40622,
          id: 2449,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "US Open",
          slug: "us-open",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 12697,
          id: 2601,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Liga ACB",
          slug: "liga-acb",
          category: {
            name: "Spain",
            slug: "spain",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 109,
            flag: "spain",
            "alpha2": "ES"
          },
          userCount: 11238,
          id: 264,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "SuperLega",
          slug: "superlega",
          category: {
            name: "Italy",
            slug: "italy",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 126,
            flag: "italy",
            "alpha2": "IT"
          },
          userCount: 7496,
          id: 517,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "UEFA Futsal Champions League",
          slug: "uefa-futsal-champions-league",
          category: {
            name: "International Clubs",
            slug: "international-clubs",
            sport: {
              name: "Futsal",
              slug: "futsal",
              id: 29
            },
            id: 541,
            flag: "international"
          },
          userCount: 6868,
          id: 770,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Test Series",
          slug: "test-series",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Cricket",
              slug: "cricket",
              id: 62
            },
            id: 1343,
            flag: "international"
          },
          userCount: 6687,
          id: 11189,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "SHL",
          slug: "shl",
          category: {
            name: "Sweden",
            slug: "sweden",
            sport: {
              name: "Ice hockey",
              slug: "ice-hockey",
              id: 4
            },
            id: 39,
            flag: "sweden",
            "alpha2": "SE"
          },
          userCount: 4450,
          id: 261,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "English Premiership",
          slug: "english-premiership",
          category: {
            name: "Rugby Union",
            slug: "rugby-union",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 82,
            flag: "rugby-union"
          },
          userCount: 3809,
          id: 424,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "EHF European League",
          slug: "ehf-european-league",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 73,
            flag: "international"
          },
          userCount: 3046,
          id: 59,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LMB",
          slug: "lmb",
          category: {
            name: "Mexico",
            slug: "mexico",
            sport: {
              name: "Baseball",
              slug: "baseball",
              id: 64
            },
            id: 1376,
            flag: "mexico",
            "alpha2": "MX"
          },
          userCount: 1559,
          id: 11200,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "NFL",
          slug: "nfl",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "American football",
              slug: "american-football",
              id: 63
            },
            id: 1370,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 45074,
          id: 9464,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "Bangladesh Premier League",
          slug: "bangladesh-premier-league",
          category: {
            name: "Bangladesh",
            slug: "bangladesh",
            sport: {
              name: "Cricket",
              slug: "cricket",
              id: 62
            },
            id: 1348,
            flag: "bangladesh",
            "alpha2": "BD"
          },
          userCount: 7549,
          id: 11164,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NRL",
          slug: "nrl",
          category: {
            name: "Rugby League",
            slug: "rugby-league",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 83,
            flag: "rugby-league"
          },
          userCount: 4299,
          id: 294,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "1a Divisao",
          slug: "1a-divisao",
          category: {
            name: "Portugal",
            slug: "portugal",
            sport: {
              name: "Futsal",
              slug: "futsal",
              id: 29
            },
            id: 186,
            flag: "portugal",
            "alpha2": "PT"
          },
          userCount: 3073,
          id: 596,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Liga Siatkowki",
          slug: "liga-siatkowki",
          category: {
            name: "Poland",
            slug: "poland",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 313,
            flag: "poland",
            "alpha2": "PL"
          },
          userCount: 2299,
          id: 831,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Pro Yakyu - NPB",
          slug: "pro-yakyu-npb",
          category: {
            name: "Japan",
            slug: "japan",
            sport: {
              name: "Baseball",
              slug: "baseball",
              id: 64
            },
            id: 1375,
            flag: "japan",
            "alpha2": "JP"
          },
          userCount: 1304,
          id: 11199,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "Premier League",
          slug: "premier-league",
          category: {
            name: "England",
            slug: "england",
            sport: {
              name: "Darts",
              slug: "darts",
              id: 22
            },
            id: 261,
            flag: "england",
            "alpha2": "EN"
          },
          userCount: 916,
          id: 774,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "UEFA Nations League",
          slug: "uefa-nations-league",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 268222,
          id: 10783,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "UEFA Europa Conference League",
          slug: "uefa-europa-conference-league",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 255791,
          id: 17015,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Brasileiro Série A",
          slug: "brasileiro-serie-a",
          category: {
            name: "Brazil",
            slug: "brazil",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 13,
            flag: "brazil",
            "alpha2": "BR"
          },
          userCount: 241390,
          id: 325,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Africa Cup of Nations",
          slug: "africa-cup-of-nations",
          category: {
            name: "Africa",
            slug: "africa",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1466,
            flag: "africa"
          },
          userCount: 193219,
          id: 270,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "CONMEBOL Libertadores",
          slug: "conmebol-libertadores",
          category: {
            name: "South America",
            slug: "south-america",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1470,
            flag: "south-america"
          },
          userCount: 186853,
          id: 384,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Qual. UEFA",
          slug: "world-championship-qual-uefa",
          category: {
            name: "Europe",
            slug: "europe",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1465,
            flag: "europe"
          },
          userCount: 182549,
          id: 11,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Club World Championship",
          slug: "club-world-championship",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1468,
            flag: "international"
          },
          userCount: 144781,
          id: 357,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Qual. CONMEBOL",
          slug: "world-championship-qual-conmebol",
          category: {
            name: "South America",
            slug: "south-america",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1470,
            flag: "south-america"
          },
          userCount: 113183,
          id: 295,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "CAF Champions League",
          slug: "caf-champions-league",
          category: {
            name: "Africa",
            slug: "africa",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1466,
            flag: "africa"
          },
          userCount: 102830,
          id: 1054,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Qual. CAF ",
          slug: "world-championship-qual-caf",
          category: {
            name: "Africa",
            slug: "africa",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1466,
            flag: "africa"
          },
          userCount: 60565,
          id: 13,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1468,
            flag: "international"
          },
          userCount: 55479,
          id: 436,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Qual. AFC",
          slug: "world-championship-qual-afc",
          category: {
            name: "Asia",
            slug: "asia",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1467,
            flag: "asia"
          },
          userCount: 31899,
          id: 308,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Qual. CONCACAF",
          slug: "world-championship-qual-concacaf",
          category: {
            name: "North & Central America",
            slug: "north-central-america",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1469,
            flag: "north-and-central-america"
          },
          userCount: 29131,
          id: 14,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Women",
          slug: "world-championship-women",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1468,
            flag: "international"
          },
          userCount: 28971,
          id: 290,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NBA Preseason",
          slug: "nba-preseason",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 15,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 28900,
          id: 2329,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "World Championship Qual., Inter-Confederation",
          slug: "world-championship-qual-inter-confederation",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1468,
            flag: "international"
          },
          userCount: 26466,
          id: 10618,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ATP Finals",
          slug: "atp-finals",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 21961,
          id: 2517,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 19492,
          id: 276,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "World",
            slug: "world",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1468,
            flag: "international"
          },
          userCount: 16033,
          id: 437,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 15414,
          id: 496,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Cup",
          slug: "world-cup",
          category: {
            name: "Rugby Union",
            slug: "rugby-union",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 82,
            flag: "rugby-union"
          },
          userCount: 15356,
          id: 421,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship",
          slug: "world-championship",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 14170,
          id: 33,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 73,
            flag: "international"
          },
          userCount: 12264,
          id: 439,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Madrid Open",
          slug: "madrid-open",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 10577,
          id: 2374,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Qual. OFC",
          slug: "world-championship-qual-ofc",
          category: {
            name: "Oceania",
            slug: "oceania",
            sport: {
              name: "Football",
              slug: "football",
              id: 1
            },
            id: 1471,
            flag: "oceania"
          },
          userCount: 9180,
          id: 309,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NFL Preseason",
          slug: "nfl-preseason",
          category: {
            name: "USA",
            slug: "usa",
            sport: {
              name: "American football",
              slug: "american-football",
              id: 63
            },
            id: 1370,
            flag: "usa",
            "alpha2": "US"
          },
          userCount: 8420,
          id: 9465,
          displayInverseHomeAwayTeams: true
        },
        {
          name: "Barcelona",
          slug: "barcelona",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 8378,
          id: 2407,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Laver Cup",
          slug: "laver-cup",
          category: {
            name: "Exhibition",
            slug: "exhibition",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 79,
            flag: "exhibition"
          },
          userCount: 8367,
          id: 10524,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 8111,
          id: 497,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "NBB",
          slug: "nbb",
          category: {
            name: "Brazil",
            slug: "brazil",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 263,
            flag: "brazil",
            "alpha2": "BR"
          },
          userCount: 7964,
          id: 1562,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "UEFA Futsal EURO",
          slug: "uefa-futsal-euro",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Futsal",
              slug: "futsal",
              id: 29
            },
            id: 250,
            flag: "international"
          },
          userCount: 7753,
          id: 750,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "AdmiralBet ABA League",
          slug: "admiralbet-aba-league",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 7568,
          id: 235,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Eurocup",
          slug: "eurocup",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 7402,
          id: 141,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Indian Wells",
          slug: "indian-wells",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 7131,
          id: 2487,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Monte Carlo",
          slug: "monte-carlo",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 7123,
          id: 2391,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Miami Open",
          slug: "miami-open",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 6818,
          id: 2430,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Rome",
          slug: "rome",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 6677,
          id: 2488,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "World Championship Women",
          slug: "world-championship-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Volleyball",
              slug: "volleyball",
              id: 23
            },
            id: 136,
            flag: "international"
          },
          userCount: 6511,
          id: 32,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Paris",
          slug: "paris",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 6037,
          id: 2404,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Laver Cup, Doubles",
          slug: "laver-cup-doubles",
          category: {
            name: "Exhibition",
            slug: "exhibition",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 79,
            flag: "exhibition"
          },
          userCount: 5432,
          id: 10525,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Cincinnati",
          slug: "cincinnati",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 5125,
          id: 2373,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Handball",
              slug: "handball",
              id: 6
            },
            id: 73,
            flag: "international"
          },
          userCount: 4251,
          id: 499,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Worlds",
          slug: "worlds",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 4207,
          id: 16053,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "WTA Finals",
          slug: "wta-finals",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 3790,
          id: 11864,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 103,
            flag: "international"
          },
          userCount: 3696,
          id: 440,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Waterpolo",
              slug: "waterpolo",
              id: 26
            },
            id: 164,
            flag: "international"
          },
          userCount: 3298,
          id: 553,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Dubai",
          slug: "dubai",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 3284,
          id: 2389,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Indian Wells",
          slug: "indian-wells",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 3055,
          id: 2619,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Montreal",
          slug: "montreal",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 3029,
          id: 2390,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Next Gen Finals Milan",
          slug: "next-gen-finals-milan",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 3019,
          id: 10122,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Miami Open",
          slug: "miami-open",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 2887,
          id: 2587,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LEC",
          slug: "lec",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 2858,
          id: 16021,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Acapulco",
          slug: "acapulco",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2822,
          id: 2366,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Rotterdam",
          slug: "rotterdam",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2812,
          id: 2444,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "PGL Major",
          slug: "pgl-major",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 2691,
          id: 16312,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Madrid Open",
          slug: "madrid-open",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 2680,
          id: 2607,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Estoril",
          slug: "estoril",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2493,
          id: 2541,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "London",
          slug: "london",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2486,
          id: 2494,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Vienna",
          slug: "vienna",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2447,
          id: 2428,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Halle",
          slug: "halle",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2444,
          id: 2493,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Rio de Janeiro",
          slug: "rio-de-janeiro",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2353,
          id: 2433,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "AFC Futsal Championship",
          slug: "afc-futsal-championship",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Futsal",
              slug: "futsal",
              id: 29
            },
            id: 250,
            flag: "international"
          },
          userCount: 2277,
          id: 2741,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Doha",
          slug: "doha",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2226,
          id: 2420,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Adelaide",
          slug: "adelaide",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2224,
          id: 14522,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "MSI",
          slug: "msi",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 2091,
          id: 16050,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Washington",
          slug: "washington",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2083,
          id: 2368,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Rome",
          slug: "rome",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 2073,
          id: 2569,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Cincinnati",
          slug: "cincinnati",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 2055,
          id: 2548,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "IEM",
          slug: "iem",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 2021,
          id: 16163,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Buenos Aires",
          slug: "buenos-aires",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 2007,
          id: 2383,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Munich",
          slug: "munich",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1959,
          id: 2491,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Stuttgart",
          slug: "stuttgart",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1911,
          id: 2483,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Hamburg",
          slug: "hamburg",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1908,
          id: 2405,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LCK",
          slug: "lck",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 1906,
          id: 16057,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Basel",
          slug: "basel",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1895,
          id: 2406,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games, Team",
          slug: "olympic-games-team",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Table tennis",
              slug: "table-tennis",
              id: 20
            },
            id: 88,
            flag: "international"
          },
          userCount: 1854,
          id: 1121,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games, Singles",
          slug: "olympic-games-singles",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Table tennis",
              slug: "table-tennis",
              id: 20
            },
            id: 88,
            flag: "international"
          },
          userCount: 1826,
          id: 564,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "CBLOL",
          slug: "cblol",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 1813,
          id: 16048,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Montpellier",
          slug: "montpellier",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1812,
          id: 2421,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Shanghai",
          slug: "shanghai",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1743,
          id: 2519,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Marseille",
          slug: "marseille",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1734,
          id: 2486,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Beach volley",
              slug: "beach-volley",
              id: 34
            },
            id: 290,
            flag: "international"
          },
          userCount: 1719,
          id: 551,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Houston",
          slug: "houston",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1602,
          id: 2409,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Dubai",
          slug: "dubai",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1589,
          id: 2612,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Geneva",
          slug: "geneva",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1577,
          id: 2531,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "BLAST Premier",
          slug: "blast-premier",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 1565,
          id: 16137,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Stuttgart",
          slug: "stuttgart",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1559,
          id: 2549,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Eastbourne",
          slug: "eastbourne",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1550,
          id: 2362,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Lyon",
          slug: "lyon",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1547,
          id: 2498,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Antwerp",
          slug: "antwerp",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1538,
          id: 2742,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Sofia",
          slug: "sofia",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1521,
          id: 2539,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games",
          slug: "olympic-games",
          category: {
            name: "Rugby Union Sevens",
            slug: "rugby-union-sevens",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 1456,
            flag: "rugby-union-sevens"
          },
          userCount: 1517,
          id: 9330,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ATP Finals, Doubles",
          slug: "atp-finals-doubles",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1512,
          id: 2385,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Doha",
          slug: "doha",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1504,
          id: 2693,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Tokyo",
          slug: "tokyo",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1484,
          id: 2435,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Stockholm",
          slug: "stockholm",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1481,
          id: 2382,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Cordoba",
          slug: "cordoba",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1461,
          id: 11717,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LPL",
          slug: "lpl",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 1452,
          id: 16056,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Winston Salem",
          slug: "winston-salem",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1426,
          id: 2439,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Delray Beach",
          slug: "delray-beach",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1388,
          id: 2506,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women, Singles",
          slug: "olympic-games-women-singles",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Table tennis",
              slug: "table-tennis",
              id: 20
            },
            id: 88,
            flag: "international"
          },
          userCount: 1387,
          id: 565,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Waterpolo",
              slug: "waterpolo",
              id: 26
            },
            id: 164,
            flag: "international"
          },
          userCount: 1378,
          id: 554,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Umag",
          slug: "umag",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1375,
          id: 2426,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Metz",
          slug: "metz",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1338,
          id: 2496,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women",
          slug: "olympic-games-women",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Beach volley",
              slug: "beach-volley",
              id: 34
            },
            id: 290,
            flag: "international"
          },
          userCount: 1299,
          id: 552,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Bastad",
          slug: "bastad",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1297,
          id: 2413,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Atlanta",
          slug: "atlanta",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1282,
          id: 2448,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Toronto",
          slug: "toronto",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1245,
          id: 2615,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "'s-Hertogenbosch",
          slug: "s-hertogenbosch",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1234,
          id: 2387,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Kitzbuhel",
          slug: "kitzbuhel",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1226,
          id: 2501,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Gstaad",
          slug: "gstaad",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1183,
          id: 2416,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Marrakech",
          slug: "marrakech",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1173,
          id: 6794,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Charleston",
          slug: "charleston",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1138,
          id: 2622,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Adelaide",
          slug: "adelaide",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1120,
          id: 14504,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LCS",
          slug: "lcs",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 1119,
          id: 16020,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Los Cabos",
          slug: "los-cabos",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1040,
          id: 2369,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Eastbourne",
          slug: "eastbourne",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 1032,
          id: 2596,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Newport",
          slug: "newport",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 1026,
          id: 2447,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Auckland",
          slug: "auckland",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 995,
          id: 2481,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games Women, Team",
          slug: "olympic-games-women-team",
          category: {
            name: "International",
            slug: "international",
            sport: {
              name: "Table tennis",
              slug: "table-tennis",
              id: 20
            },
            id: 88,
            flag: "international"
          },
          userCount: 958,
          id: 1123,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Pune",
          slug: "pune",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 958,
          id: 10755,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "St. Petersburg",
          slug: "st-petersburg",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 956,
          id: 2499,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Lyon ",
          slug: "lyon",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 921,
          id: 14513,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Beijing",
          slug: "beijing",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 913,
          id: 2436,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Birmingham",
          slug: "birmingham",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 910,
          id: 2573,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "The International",
          slug: "the-international",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 882,
          id: 16273,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "BBL",
          slug: "bbl",
          category: {
            name: "England",
            slug: "england",
            sport: {
              name: "Basketball",
              slug: "basketball",
              id: 2
            },
            id: 117,
            flag: "england",
            "alpha2": "EN"
          },
          userCount: 855,
          id: 230,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Moscow",
          slug: "moscow",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 847,
          id: 2399,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ATP Sydney",
          slug: "atp-sydney",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 821,
          id: 2482,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Monterrey",
          slug: "monterrey",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 783,
          id: 2562,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "St. Petersburg",
          slug: "st-petersburg",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 743,
          id: 2694,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Olympic Games, Women",
          slug: "olympic-games-women",
          category: {
            name: "Rugby Union Sevens",
            slug: "rugby-union-sevens",
            sport: {
              name: "Rugby",
              slug: "rugby",
              id: 12
            },
            id: 1456,
            flag: "rugby-union-sevens"
          },
          userCount: 733,
          id: 9331,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Nottingham",
          slug: "nottingham",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 732,
          id: 2689,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Bogota",
          slug: "bogota",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 713,
          id: 2560,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Linz",
          slug: "linz",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 709,
          id: 2583,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "San Jose",
          slug: "san-jose",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 708,
          id: 2610,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Auckland",
          slug: "auckland",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 675,
          id: 2554,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Strasbourg",
          slug: "strasbourg",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 638,
          id: 2591,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Montreal",
          slug: "montreal",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 628,
          id: 2624,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Prague",
          slug: "prague",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 621,
          id: 2592,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "'s-Hertogenbosch",
          slug: "s-hertogenbosch",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 580,
          id: 2594,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Washington",
          slug: "washington",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 563,
          id: 2653,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Istanbul",
          slug: "istanbul",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 551,
          id: 2585,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Palermo",
          slug: "palermo",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 541,
          id: 2639,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Rabat",
          slug: "rabat",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 533,
          id: 2682,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Lausanne",
          slug: "lausanne",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 519,
          id: 11867,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Chengdu",
          slug: "chengdu",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 495,
          id: 9402,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "European Masters",
          slug: "european-masters",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 495,
          id: 16027,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Moscow",
          slug: "moscow",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 494,
          id: 2550,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Antalya",
          slug: "antalya",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 485,
          id: 10119,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Tokyo",
          slug: "tokyo",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 479,
          id: 2582,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Budapest",
          slug: "budapest",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 472,
          id: 2597,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Hua Hin",
          slug: "hua-hin",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 463,
          id: 11725,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "WTA Sydney",
          slug: "wta-sydney",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 452,
          id: 2566,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Seoul",
          slug: "seoul",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 433,
          id: 2604,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Zhuhai",
          slug: "zhuhai",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 406,
          id: 11856,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Hobart",
          slug: "hobart",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 378,
          id: 2567,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Beijing",
          slug: "beijing",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 365,
          id: 2557,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Luxembourg",
          slug: "luxembourg",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 341,
          id: 2647,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Bucharest",
          slug: "bucharest",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 316,
          id: 2563,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ESL",
          slug: "esl",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 312,
          id: 16109,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "New York",
          slug: "new-york",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 293,
          id: 10757,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Elite Trophy",
          slug: "elite-trophy",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 291,
          id: 2709,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Sao Paulo",
          slug: "sao-paulo",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 286,
          id: 2425,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "VCS",
          slug: "vcs",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 269,
          id: 16025,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Brisbane",
          slug: "brisbane",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 262,
          id: 2644,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "DreamHack",
          slug: "dreamhack",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 260,
          id: 16170,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "DreamLeague",
          slug: "dreamleague",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 259,
          id: 16254,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Acapulco",
          slug: "acapulco",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 238,
          id: 2613,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Wuhan",
          slug: "wuhan",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 231,
          id: 2666,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Mallorca",
          slug: "mallorca",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 228,
          id: 2704,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Budapest",
          slug: "budapest",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 225,
          id: 10753,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LLA",
          slug: "lla",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 214,
          id: 16019,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Shenzhen",
          slug: "shenzhen",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 203,
          id: 2700,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "All-Star",
          slug: "all-star",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 193,
          id: 16054,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Berlin ",
          slug: "berlin",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 185,
          id: 3235,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Tianjin",
          slug: "tianjin",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 174,
          id: 2698,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "cs_summit",
          slug: "cs-summit",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 172,
          id: 16309,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "TCL",
          slug: "tcl",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 165,
          id: 16042,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "BLAST Pro Series",
          slug: "blast-pro-series",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 153,
          id: 16322,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Nuremberg",
          slug: "nuremberg",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 143,
          id: 2702,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Zhengzhou",
          slug: "zhengzhou",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 141,
          id: 13493,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "New Heaven",
          slug: "new-heaven",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 132,
          id: 2602,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Hong Kong",
          slug: "hong-kong",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 127,
          id: 2575,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Nanchang",
          slug: "nanchang",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 122,
          id: 2706,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Flashpoint",
          slug: "flashpoint",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 122,
          id: 16144,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Guangzhou",
          slug: "guangzhou",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 116,
          id: 2579,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Tashkent, Singles",
          slug: "tashkent-singles",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 109,
          id: 2646,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Arctic Invitational",
          slug: "arctic-invitational",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 109,
          id: 16298,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Champions Cup",
          slug: "champions-cup",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 104,
          id: 16283,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Asia Championships",
          slug: "asia-championships",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 99,
          id: 16288,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LJL",
          slug: "ljl",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 98,
          id: 16038,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Hiroshima",
          slug: "hiroshima",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 89,
          id: 10762,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Quebec City",
          slug: "quebec-city",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 83,
          id: 2606,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "PCS",
          slug: "pcs",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 82,
          id: 16011,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ELEAGUE",
          slug: "eleague",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 81,
          id: 16319,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Premier League",
          slug: "premier-league",
          category: {
            name: "England",
            slug: "england",
            sport: {
              name: "Snooker",
              slug: "snooker",
              id: 19
            },
            id: 193,
            flag: "england",
            "alpha2": "EN"
          },
          userCount: 80,
          id: 732,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LCL",
          slug: "lcl",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 79,
          id: 16032,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Lugano",
          slug: "lugano",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 78,
          id: 10764,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Jurmala",
          slug: "jurmala",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 73,
          id: 11869,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "StarLadder",
          slug: "starladder",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 72,
          id: 16295,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Dota Pit League",
          slug: "dota-pit-league",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 63,
          id: 16258,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ECS",
          slug: "ecs",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 63,
          id: 16320,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "LCS Academy",
          slug: "lcs-academy",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 59,
          id: 16015,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Lausanne",
          slug: "lausanne",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 49,
          id: 9405,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Challenger Korea",
          slug: "challenger-korea",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 46,
          id: 16024,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "BEYOND EPIC",
          slug: "beyond-epic",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 35,
          id: 16169,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Tokyo",
          slug: "tokyo",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 32,
          id: 11862,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ESL ESEA",
          slug: "esl-esea",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 29,
          id: 16316,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "MLG Columbus",
          slug: "mlg-columbus",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 28,
          id: 16313,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "EPICENTER",
          slug: "epicenter",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 27,
          id: 16317,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "StarSeries & i-League",
          slug: "starseries-and-i-league",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 26,
          id: 16310,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "OPL",
          slug: "opl",
          category: {
            name: "LoL",
            slug: "lol",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1571,
            flag: "lol"
          },
          userCount: 25,
          id: 16049,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Dota Major Championships",
          slug: "dota-major-championships",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 22,
          id: 16272,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "StarLadder StarSeries",
          slug: "starladder-starseries",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 22,
          id: 16311,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Chinese DOTA2 Professional Association",
          slug: "chinese-dota2-professional-association",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 19,
          id: 16194,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "BLAST Bounty Hunt",
          slug: "blast-bounty-hunt",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 19,
          id: 16171,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Professional League",
          slug: "professional-league",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 18,
          id: 16257,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Estoril",
          slug: "estoril",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 17,
          id: 2489,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Dota Asia Championships",
          slug: "dota-asia-championships",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 16,
          id: 16266,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Epic Prime League",
          slug: "epic-prime-league",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 14,
          id: 16187,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "ESL",
          slug: "esl",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 12,
          id: 16217,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Gamers Without Borders",
          slug: "gamers-without-borders",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 9,
          id: 16176,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "DPL-CDA Professional League",
          slug: "dpl-cda-professional-league",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 9,
          id: 16183,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "EPICENTER",
          slug: "epicenter",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 8,
          id: 16268,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "EMS",
          slug: "ems",
          category: {
            name: "CS:GO",
            slug: "csgo",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1572,
            flag: "csgo"
          },
          userCount: 8,
          id: 16318,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "PVP Esports Championship",
          slug: "pvp-esports-championship",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 8,
          id: 16242,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Lausanne",
          slug: "lausanne",
          category: {
            name: "WTA",
            slug: "wta",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 6,
            flag: "wta"
          },
          userCount: 7,
          id: 14512,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Galaxy Battle",
          slug: "galaxy-battle",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 7,
          id: 16261,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "The Summit",
          slug: "the-summit",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 6,
          id: 16262,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Delray Beach",
          slug: "delray-beach",
          category: {
            name: "ATP",
            slug: "atp",
            sport: {
              name: "Tennis",
              slug: "tennis",
              id: 5
            },
            id: 3,
            flag: "atp"
          },
          userCount: 6,
          id: 2149,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Captains Draft",
          slug: "captains-draft",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 5,
          id: 16267,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "Mars Dota League",
          slug: "mars-dota-league",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 5,
          id: 16256,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "OMEGA",
          slug: "omega",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 4,
          id: 16164,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "StarLadder",
          slug: "starladder",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 2,
          id: 16259,
          displayInverseHomeAwayTeams: false
        },
        {
          name: "GESC",
          slug: "gesc",
          category: {
            name: "Dota 2",
            slug: "dota2",
            sport: {
              name: "E-sports",
              slug: "esports",
              id: 72
            },
            id: 1570,
            flag: "dota-2"
          },
          userCount: 2,
          id: 16270,
          displayInverseHomeAwayTeams: false
        },
      ],
      topUniqueTournamentIds: [
        732,
        774,
        9464,
        11205,
        650,
        423,
        11184,
        11093,
        77,
        3,
        132,
        7,
        11200,
        593,
        422,
        11165,
        11094,
        160,
        234,
        138,
        679,
        11199,
        770,
        420,
        11191,
        586,
        268,
        30,
        441,
        17,
        596,
        424,
        11190,
        1452,
        304,
        225,
        149,
        294,
        11189,
        134,
        1468,
        262,
        159,
        8,
        11164,
        59,
        261,
        517,
        264,
        35,
        1562,
        831,
        23,
        141,
        33,
        34,
        32,
        235,
        325,
        230,
        // 384,
        1054,
        16,
        // 13,
        291,
        410,
        196,
        626,
        19
      ]
  }