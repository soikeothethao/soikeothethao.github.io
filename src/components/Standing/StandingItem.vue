<template lang="">
    <div v-if="this.standing">
        <b-row class="border-bottom fw-bold">
            <b-col class="col-4">
                Đội
            </b-col>
            <b-col class="col-8 small text-center">
                <b-row>
                    <b-col class="col-1"></b-col>
                    <b-col class="col-1 ps-1 pe-1">Trận</b-col>
                    <b-col class="col-1 ps-1 pe-1">Thắng</b-col>
                    <b-col class="col-1 ps-1 pe-1">Hòa</b-col>
                    <b-col class="col-1 ps-1 pe-1">Bại</b-col>
                    <b-col class="col-1 ps-1 pe-1">B.Thắng</b-col>
                    <b-col class="col-1 ps-1 pe-1">B.Thua</b-col>
                    <b-col class="col-1 ps-1 pe-1">H.Số</b-col>
                    <b-col class="col-1 ps-1 pe-1">Điểm</b-col>
                    <b-col class="col-3 ps-1 pe-1">5 Trận Gần Nhất</b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row v-for="(standingItem,index) in this.standing.rows" class="border-bottom">
            <b-col class="col-4 pt-1 pb-1">
                <b-row>
                    <b-col class="col-2">{{standingItem.position}}</b-col>
                    <b-col class="col-2"><b-img :src="`${getImgUrl()}/team-logo/${standingItem.team.slug}.png`" width="30%" center="true" round="5"></b-img></b-col>
                    <b-col class="col-8">{{standingItem.team.name}}</b-col>
                </b-row>
            </b-col>
            <b-col class="col-8 small text-center">
                <b-row>
                    <b-col class="col-1"></b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.matches}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.wins}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.draws}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.losses}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.scoresFor}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.scoresAgainst}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.scoresFor - standingItem.scoresAgainst}}</b-col>
                    <b-col class="col-1 ps-1 pe-1">{{standingItem.points}}</b-col>
                    <b-col class="col-3 ps-1 pe-1">
                        <b-row v-if="this.last5Events" class="text-center">
                            <b-col v-for="item in this.last5Events[standingItem.team.id]" class="col col-2 text-white fw-bolder m-0 rounded-circle" :class="getResultColor(item, standingItem.team.id)">{{getResultText(item, standingItem.team.id)}}</b-col>
                        </b-row>
                        <b-row v-else>
                            <b-skeleton type="avatar"></b-skeleton>
                            <b-skeleton type="avatar"></b-skeleton>
                            <b-skeleton type="avatar"></b-skeleton>
                            <b-skeleton type="avatar"></b-skeleton>
                            <b-skeleton type="avatar"></b-skeleton>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
    <div v-else>
        <b-skeleton-table
        :rows="5"
        :columns="11"
        :table-props="{ bordered: true, striped: true }"
        ></b-skeleton-table>
    </div>
</template>
<script>
import { getTopUniqueTournament, getImgUrl } from '@/_helper/index.js'
import { BCol, BRow, BSkeleton } from 'bootstrap-vue'
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            standing: {},
            last5Events: []
        }
    },
    components: {
        BCol, BRow, BSkeleton
    },
    computed: {
        ...mapState({
            res_standing: state => state.standing.standing,
            res_season: state => state.standing.season,
            res_last5Events: state => state.standing.last5Events,
            res_errors: state => state.standing.errors,
        }),
    },
    created() {
        this.season = this.res_season;
        if (this.res_standing) {
            this.standing = this.res_standing[0];
        }
    },
    watch: {
        res_season() {
            this.season = this.res_season;
        },
        res_standing() {
            if (!this.res_standing) {
                this.standing = this.res_standing
            } else {
                this.standing = this.res_standing[0];
            }
        },
        res_last5Events() {
            this.last5Events = this.res_last5Events;
            console.log("this.last5Events")
            console.log(this.last5Events)
        },
    },
    methods: {
        getImgUrl,
        getResultColor(event, teamId) {
            if (event.winnerCode === 3) {
                return "bg-secondary";
            }

            if ((event.winnerCode === 1 && event.homeTeam.id === teamId) || (event.winnerCode === 2 && event.awayTeam.id === teamId)) {
                return "bg-success";
            }

            return "bg-danger";

        },
        getResultText(event, teamId) {
            if (event.winnerCode === 3) {
                return "D";
            }

            if ((event.winnerCode === 1 && event.homeTeam.id === teamId) || (event.winnerCode === 2 && event.awayTeam.id === teamId)) {
                return "W";
            }

            return "L";

        }
    }
}
</script>
<style lang="">
    
</style>