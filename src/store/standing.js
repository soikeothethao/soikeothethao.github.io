import standingRepository from "@/_repositories/standingRepository";

const state={
    season: {},
    standing: {},
    errors:{},
    last5Events:{}
}

const actions ={
    async getStanding({commit}, uniqueTournamentId){
        commit('GET_STANDING_RESULT', null)
        commit('GET_SEASON_RESULT', {})
        let response =  await standingRepository.getSeasonId(uniqueTournamentId);
        if(!response.data.error){
            let season = response.data.data[0];
            commit('GET_SEASON_RESULT', season)
            let payload = {seasonId: season.id, uniqueTournamentId: uniqueTournamentId}
            commit('GET_STANDING_RESULT', await standingRepository.getStandingBySeason(payload))
        }
        
    },
    async getLast5Events({commit}, uniqueTournamentId){
        commit('GET_LAST5EVENTS_RESULT', null)
        let response =  await standingRepository.getSeasonId(uniqueTournamentId);
        if(!response.data.error){
            let season = response.data.data[0];
            commit('GET_SEASON_RESULT', season)
            let payload = {seasonId: season.id, uniqueTournamentId: uniqueTournamentId}
            commit('GET_LAST5EVENTS_RESULT', await standingRepository.getLast5Events(payload))
        }
        
    }

}

const mutations ={
    GET_STANDING_RESULT: (state, response) =>{
        if(response == null){
            state.standing = {}
            return
        }
        if(response.status && response.status === 200){
            state.standing = response.data.data
        }else{
            state.standing = {}
            state.errors = response.errors
        }
    },
    GET_SEASON_RESULT: (state, season) =>{
        state.season = season
    },
    GET_LAST5EVENTS_RESULT: (state, response) =>{
        if(response == null){
            state.last5Events = null
            return
        }
        if(response.status && response.status === 200){
            state.last5Events = response.data.data
        }else{
            state.last5Events = []
            state.errors = response.errors
        }
    }
}

export const standing = {
    namespaced: true,
    state,
    actions,
    mutations
}