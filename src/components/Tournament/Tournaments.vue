<template lang="">
    <div>
        <b-card-title class="text-info">Đáng chú ý</b-card-title>
        <template v-if="events.length === 0">
            <b-skeleton animation="wave" width="100%"></b-skeleton>
        </template>
        <template v-for="(event,index) in events">
            <b-row v-if="event" class="p-2">
                <b-row  class="mb-2 clearfix">
                    <!-- https://apiv2.apifootball.com/badges/logo_country/41_england.png -->
                    <b-col class="col-2 mr-1"><b-img :src="`${getImgUrl()}/flags/${this.getTournament(index).slug}.png`" width="50%" center="true" round="5"></b-img></b-col>
                    <b-col class="col-8 text-left"><h4 class="font-weight-bolder">{{this.getTournament(index).name}}</h4></b-col>
                </b-row>
                <b-row  class="match-row mt-1 mb-1 pb-2" v-for="(eventItem) in event" @click="showEventInfo(eventItem)">
                    <template v-if="!$isMobile()">
                        <b-col class="col-2 mr-1 text-center"><span class="border-right border-dark">{{this.timestamptoDateTime(eventItem.startTimestamp)}}</span></b-col>
                        <b-col class="col-10 text-center d-inline">
                            <b-row>
                                <b-col class="col-1">
                                    <b-img :src="`${getImgUrl()}/team-logo/${eventItem.homeTeam.slug}.png`" width="50%" center="true" round="5"></b-img>
                                </b-col>
                                <b-col class="col-3">
                                    <span class="home-team d-inline font-weight-700 m-2">{{eventItem.homeTeam.name}}</span>
                                    <!-- <span>{{eventItem.homeTeam.slug}} -</span>
                                    <span>{{eventItem.homeTeam.id}}</span> -->
                                </b-col>
                                <b-col class="col-2">
                                    <span class="home-point d-inline m-1">{{eventItem.homeScore.current}}</span>
                                    <span class="sep d-inline m-1">-</span>
                                    <span class="away-point d-inline m-1">{{eventItem.awayScore.current}}</span>
                                </b-col>
                                
                                <b-col class="col-3">
                                    <span class="away-team d-inline font-weight-700 m-2">{{eventItem.awayTeam.name}}</span>
                                    <!-- <span>{{eventItem.awayTeam.slug}} -</span>
                                    <span>{{eventItem.awayTeam.id}}</span> -->
                                </b-col>
                                <b-col class="col-1">
                                    <b-img :src="`${getImgUrl()}/team-logo/${eventItem.awayTeam.slug}.png`" width="50%" center="true" round="5"></b-img>
                                </b-col>
                                <b-col class="col-2"> <span class="match-status small" :class="eventItem.status.type">{{this.getStatusString(eventItem.status.code, eventItem.status.description)}}</span></b-col>
                            </b-row>
                        </b-col>
                    </template>
                    <template v-else>
                        <b-col class="col-2 pe-0 text-center"><span class="border-right border-dark">{{this.timestamptoDateTime(eventItem.startTimestamp)}}</span></b-col>
                        <b-col class="col-10 text-center d-inline">
                            <b-row>
                                <!-- <b-col class="col-1 d-inline-block">
                                    
                                </b-col> -->
                                <b-col class="col-4 p-0">
                                    <b-img :src="`${getImgUrl()}/team-logo/${eventItem.homeTeam.slug}.png`" width="50%" center="true" round="5"></b-img>
                                    <span class="home-team d-inline font-weight-700 m-2">{{eventItem.homeTeam.name}}</span>
                                </b-col>
                                <b-col class="col-2 p-0">
                                    <span class="home-point d-inline m-1">{{eventItem.homeScore.current}}</span>
                                    <span class="sep d-inline m-1">-</span>
                                    <span class="away-point d-inline m-1">{{eventItem.awayScore.current}}</span>
                                </b-col>
                                
                                <b-col class="col-4">
                                    <b-img :src="`${getImgUrl()}/team-logo/${eventItem.awayTeam.slug}.png`" width="50%" center="true" round="5"></b-img>
                                    <span class="away-team d-inline font-weight-700 m-2">{{eventItem.awayTeam.name}}</span>
                                </b-col>
                                <b-col class="col-2"> <span class="match-status small" :class="eventItem.status.type">{{this.getStatusString(eventItem.status.code, eventItem.status.description)}}</span></b-col>
                            </b-row>
                        </b-col>
                    </template>
                </b-row>
            </b-row>
        </template>
        <b-modal v-model="modalShow" scrollable title="Chi tiết trận đấu">
            <MatchInfo></MatchInfo>
        </b-modal>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { BCardText, BCardTitle, BRow, BCol, BImg, BSkeleton, BModal } from 'bootstrap-vue'
import { getTournament, getImgUrl, getStatusString, timestamptoDateTime } from '@/_helper/index.js'
import MatchInfo from "../MatchInfo/MatchInfo.vue";
export default {
    data() {
        return {
            events: [],
            eventsLength: 0,
            event_date: '',
            incidents: [],
            lineUp: {},
            modalShow: false
        }
    },
    components: {
        BCardText,
        BCardTitle,
        BRow,
        BCol,
        BImg,
        BSkeleton,
        BModal,
        MatchInfo
    },
    methods: {
        getTournament, getImgUrl, getStatusString, timestamptoDateTime,
        ...mapActions('events', ['getEvents', 'getIncidents', 'getLineUp']),
        ...mapMutations('events', ['setSelectedEvent']),

        async showEventInfo(event) {
            if (this.$isMobile()) {
                this.modalShow = !this.modalShow;
            }
            this.setSelectedEvent({});
            await this.getIncidents(event.id);
            await this.getLineUp(event.id);
            this.setSelectedEvent(event);

        }
    },
    computed: {
        ...mapState({
            stored_events: state => state.events.events,
            stored_event_date: state => state.events.event_date,
            stored_incidents: state => state.events.incidents,
            stored_lineUp: state => state.events.lineUp,
        }),
    },
    async created() {
        // let slug = this.$route.params.dateString;
        // if (slug && slug !== "") {
        //     let dateString = slug.split('lich-thi-dau-ngay-')[1]
        //     let datesplit = dateString.split('-');
        //     this.event_date = new Date(datesplit[2], (datesplit[1] - 1), datesplit[0])
        // } else {
        //     this.event_date = new Date()
        // }

        // let yourDate = this.event_date;
        // let offset = yourDate.getTimezoneOffset()
        // let now = new Date(yourDate.getTime() - (offset * 60 * 1000))
        // let now = new Date()
        // await this.getEvents(now.toISOString().split('T')[0]);
        // this.events = this.stored_events;
        // this.eventsLength = Object.keys(this.events).length

        // await this.showEventInfo();
        // this.incidents = this.stored_incidents;

        // this.lineUp = this.stored_lineUp

        // console.log(this.events)
        // console.log(this.incidents)
    },
    watch: {
        '$route': function () {
            location.reload();
        },
        stored_incidents(newData) {
            this.incidents = this.stored_incidents;
        },
        stored_lineUp(newData) {
            this.lineUp = this.stored_lineUp
        },
        async stored_event_date(newData) {
            await this.getEvents(newData);
            this.events = this.stored_events;
            this.eventsLength = Object.keys(this.events).length
        }
    }
}
</script>
<style scoped>
.match-row {
    padding: 0;
}

.match-row:hover {
    background-color: aquamarine;
    cursor: pointer;
    border-radius: 10px;
}

.match-status.finished {
    color: black;
}

.match-status.notstarted {
    color: grey;
}

.match-status.inprogress {
    color: green;
}

.match-row {
    border-bottom: 1px solid grey;
}
</style>