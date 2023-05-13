import Repository from './Repository'


export default {
    async getEvents(stringDate) {
        return Repository.get('/events/schedule/date',{params:{date: stringDate}}).catch(function (error) {
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
    async getIncidents(eventID){
        console.log(eventID)
        return Repository.get('/events/incidents',{params:{event_id: eventID}}).catch(function (error) {
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
    async getLineUp(eventID){
        return Repository.get('/events/lineups',{params:{event_id: eventID}}).catch(function (error) {
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
