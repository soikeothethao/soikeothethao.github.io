import countryRepository from "@/_repositories/countryRepository";

const state={
    countries:[]
}

const actions ={
    async getCountries({commit}){
        commit('GET_COUNTRY_RESULT', await countryRepository.getCountries())
    }
}

const mutations = {
    GET_COUNTRY_RESULT: (state, response) =>{
        console.log(response)
    }
}

export const country = {
    namespaced: true,
    state,
    actions,
    mutations
}