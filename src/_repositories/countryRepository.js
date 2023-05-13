import Repository from './Repository'

const country_action = "get_countries"

export default {
    async getCountries() {
        return Repository.get('',{params:{action: country_action}})
    }
}