import Repository from './Repository'

export default {

    async getSeasonId(uniqueTournamentId){
        return Repository.get('/unique-tournaments/seasons',{params:{unique_tournament_id: uniqueTournamentId}}).catch(function (error) {
            if (error.response && error.response.status === 404 ) {
              return {
                data:{
                'error' : "notfound",
                'data' : [],
                'status' : false
                },
              }
            }
            return {
              data:{
              'error' : "error",
              'data' : [],
              'status' : false
              },
            }
          });
    },
    
    async getStandingBySeason(payload){
        //payload{seasonId, uniqueTournamentId}
        return Repository.get('/seasons/standings',{
            params:{
                standing_type: 'total',
                seasons_id: payload.seasonId,
                unique_tournament_id: payload.uniqueTournamentId}
            }).catch(function (error) {
            if (error.response && error.response.status === 404 ) {
              return {
                data:{
                'error' : "notfound",
                'data' : {},
                'status' : false
                },
              }
            }
            return {
              data:{
              'error' : "error",
              'data' : {},
              'status' : false
              },
            }
          });
    },
    async getLast5Events(payload){
        //payload{seasonId, uniqueTournamentId}
        return Repository.get('/seasons/team-events',{
            params:{
                seasons_id: payload.seasonId,
                unique_tournament_id: payload.uniqueTournamentId}
            }).catch(function (error) {
            if (error.response && error.response.status === 404 ) {
              return {
                data:{
                'error' : "notfound",
                'data' : {},
                'status' : false
                },
              }
            }
            return {
              data:{
              'error' : "error",
              'data' : {},
              'status' : false
              },
            }
          });
      }

}