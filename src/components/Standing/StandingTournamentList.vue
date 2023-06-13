<template lang="">
    <div>
        <b-list-group>
            <b-list-group-item v-for="(tournamentItem,index) in tournamentList" @click="selectTournament(tournamentItem)" :variant="tournamentItem.slug === this.selectedTournament? 'primary':'light'"> 
                <b-row>
                    <b-col class="col col-3">
                        <b-img :src="`${getImgUrl()}/flags/${tournamentItem.slug}.png`" width="40%" center="true" round="5"></b-img>
                    </b-col>
                    <b-col class="text-center mx-auto d-block">
                        {{tournamentItem.name}}
                    </b-col>
                </b-row>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
import { getTopUniqueTournament, getImgUrl } from '@/_helper/index.js'
import { BListGroup, BListGroupItem, BCol, BRow } from 'bootstrap-vue'
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            tournamentList: [],
            selectedTournament: 'premier-league',
            selectedTournamentID: 17
        }
    },
    components: {
        BListGroup, BListGroupItem, BCol, BRow
    },
    async created() {
        this.tournamentList = getTopUniqueTournament();
        await this.getStanding(this.selectedTournamentID);
        await this.getLast5Events(this.selectedTournamentID);
    },
    methods: {
        ...mapActions('standing', ['getStanding', 'getLast5Events']),
        getTopUniqueTournament, getImgUrl,
        async selectTournament(tournament) {
            this.selectedTournament = tournament.slug;
            this.selectedTournamentID = tournament.id;
            await this.getStanding(this.selectedTournamentID);
            await this.getLast5Events(this.selectedTournamentID);
        }

    }
}
</script>
<style scoped>
.list-group-item:hover {
    cursor: pointer;
    background-color: #cfe2ff
}
</style>