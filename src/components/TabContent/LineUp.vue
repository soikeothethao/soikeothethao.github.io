<template lang="">
    <div v-if="this.stored_lineUp !== undefined">
        <b-row>
            <h4 class="text-center">
                Đội hình
            </h4>
            <span v-if="this.lineUp.confirmed" class="text-center">
                (Chính thức)
            </span>
            <span v-else  class="text-center">
                (Dự kiến)
            </span>
        </b-row>
        <b-row v-if="this.lineUp.home" class="mb-4 line-up-player">
            <h5>Đội nhà:</h5>
            
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Thủ môn : </span>
                <template v-for="player in this.lineUp.home.players">
                    <span v-if="!player.substitute && player.player.position === 'G'" class="d-inline pe-0 ">{{player.player.shortName}}</span>
                </template>
            </b-row>
            
            <b-row class="d-inline-block">
                <b-col class="fw-bolder d-inline">Hậu vệ : </b-col>
                <template v-for="player in this.lineUp.home.players">
                    <span v-if="!player.substitute && player.player.position === 'D'" class="d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>
            
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Tiền vệ : </span>
                <template v-for="player in this.lineUp.home.players">
                    <span v-if="!player.substitute && player.player.position === 'M'" class="d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>
 
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Tiền đạo : </span>
                <template v-for="player in this.lineUp.home.players">
                    <span v-if="!player.substitute && player.player.position === 'F'" class="d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>

            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Dự bị : </span>
                <template v-for="player in this.lineUp.home.players">
                    <span v-if="player.substitute" class="col-4 d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>

            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Vắng mặt: </span>
                <template v-for="player in this.lineUp.home.missingPlayers">
                    <span class="col-4 d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>

        </b-row>
        <b-row v-if="this.lineUp.away" class="mb-4 line-up-player">
            <h5>Đội khách:</h5>
            
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Thủ môn : </span>
                <template v-for="player in this.lineUp.away.players">
                    <span v-if="!player.substitute && player.player.position === 'G'" class=" d-inline pe-0 ">{{player.player.shortName}}</span>
                </template>
            </b-row>
            
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Hậu vệ : </span>
                <template v-for="player in this.lineUp.away.players">
                    <span v-if="!player.substitute && player.player.position === 'D'" class="d-inline pe-0 ">{{player.player.shortName}}</span>
                </template>
            </b-row>
            
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Tiền vệ : </span>
                <template v-for="player in this.lineUp.away.players">
                    <span v-if="!player.substitute && player.player.position === 'M'" class="d-inline pe-0 ">{{player.player.shortName}}</span>
                </template>
            </b-row>
 
            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Tiền đạo : </span>
                <template v-for="player in this.lineUp.away.players">
                    <span v-if="!player.substitute && player.player.position === 'F'" class="d-inline pe-0 ">{{player.player.shortName}}</span>
                </template>
            </b-row>

            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Dự bị : </span>
                <template v-for="player in this.lineUp.away.players">
                    <span v-if="player.substitute" class="d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>

            <b-row class="d-inline-block">
                <span class="fw-bolder d-inline">Vắng mặt: </span>
                <template v-for="player in this.lineUp.away.missingPlayers">
                    <span class="col-4 d-inline pe-0">{{player.player.shortName}}</span>
                </template>
            </b-row>
            
        </b-row>
        
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { BRow, BCol, BImg } from 'bootstrap-vue';
export default {
    data() {
        return {
            lineUp: {},
        }
    },
    methods: {
        ...mapActions('events', ['getLineUp']),
    },
    computed: {
        ...mapState({
            stored_lineUp: state => state.events.lineUp,
        }),
    },
    components: {
        BRow,
        BCol,
        BImg
    },
    async created() {
        this.lineUp = this.stored_lineUp;
    },
    watch: {
        stored_lineUp() {
            this.lineUp = this.stored_lineUp;
        }
    }
}
</script>
<style scoped>
.line-up-player {
    border-bottom: 1px solid grey;
}
</style>