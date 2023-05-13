<template lang="">
    <div v-if="Object.keys(stored_selected_event).length > 0">
        <b-row class="mb-2">
            <b-col class="col-5">
                <p class="text-center p-2 fw-bold">{{stored_selected_event.homeTeam.name}}</p>
            </b-col>
            <b-col class="col-2 ">
            </b-col>
            <b-col class="col-5 ">
                <p class="text-center p-2 fw-bold">{{stored_selected_event.awayTeam.name}}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="col-5 text-center">
                <b-img :src="`${getImgUrl()}/team-logo/${stored_selected_event.homeTeam.slug}.png`" width="55" center="true" round="5"></b-img>
            </b-col>
            <b-col class="col-2 p-0">
                <b-row>
                    <b-col>
                        <span class="home-point p-1 d-inline fw-bold fs-5">{{stored_selected_event.homeScore.current}}</span><span class="sep p-1 d-inline fs-4">-</span><span class="home-point p-1 d-inline fw-bold fs-5">{{stored_selected_event.awayScore.current}}</span>
                    </b-col>
                    <b-col class="fst-italic">
                        <span class="home-point p-1 d-inline">({{stored_selected_event.homeScore.period1}}</span><span class="sep p-1 d-inline">-</span><span class="home-point p-1 d-inline">{{stored_selected_event.awayScore.period1}})</span>
                    </b-col>
                    
                </b-row>
            </b-col>
            <b-col class="col-5 text-center">
                <b-img :src="`${getImgUrl()}/team-logo/${stored_selected_event.awayTeam.slug}.png`" width="55" center="true" round="5"></b-img>
            </b-col>
        </b-row>
        <!-- <b-row class="text-center m-3 ms-5 me-5">
            <b-button variant="success" class="fs-5">Xem Chi Tiết</b-button>
        </b-row> -->
        <b-row class="mt-5">
            <b-tabs>
                <template #tabs-end>
                    <b-tab title="Đội hình" :active="stored_selected_event.winnerCode === 0"><LineUp v-if="this.stored_lineUp"></LineUp><div v-else> Không có thông tin</div></b-tab>
                    <b-tab title="Diễn biến" :active="stored_selected_event.winnerCode === 1"><Incidents v-if="this.stored_incidents"></Incidents><div v-else> Không có thông tin</div></b-tab>
                    
                    <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->

                    <!-- <li class="info-tab nav-item align-self-center p-2 selected">Diễn biến</li>
                    <li class="info-tab nav-item align-self-center p-2">Đội hình</li> -->
                    <!-- <li class="info-tab nav-item align-self-center p-2">Thông số trận đấu</li> -->
                </template>
            </b-tabs>
        </b-row>
        <b-row>
        </b-row>
    </div>
</template>
<script>
import { BRow, BCol, BButton, BTab } from 'bootstrap-vue'
import Incidents from '../TabContent/Incidents.vue';
import LineUp from '../TabContent/LineUp.vue';
import { mapState, mapActions, mapMutations } from "vuex";
import { getImgUrl } from '@/_helper/index.js'
export default {
    data() {
        return {
            incidents: [],
            lineUp: {}
        }
    },
    components: {
        BRow, BCol, BButton, BTab,
        Incidents,
        LineUp
    },
    computed: {
        ...mapState({
            stored_incidents: state => state.events.incidents,
            stored_lineUp: state => state.events.lineUp,
            stored_selected_event: state => state.events.selectedEvent,
        }),
    },
    methods: {
        getImgUrl
    },
    created() {
        console.log(this.stored_selected_event)
    }
}
</script>
<style scoped>
li.info-tab {
    color: #39c8ed;
    opacity: 0.5;
}

li.info-tab:hover {
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
}

li.info-tab.selected {
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
    font-weight: bolder;
}

.tab-pane.active {
    width: 100%;
}
</style>