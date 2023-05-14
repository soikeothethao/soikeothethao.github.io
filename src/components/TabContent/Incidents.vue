<template lang="">
    <div class="small p-0">
        <template v-for="incident in incidents">
            <b-row v-if="incident.isHome === undefined" class="incident-item align-items-center general-incident w-100">
                <template v-if="incident.incidentType === 'period'">
                    <b-col class="col-12 text-center">{{ this.getSub('INCIDENT_TYPE',incident.incidentType)}} - {{this.getSub('OTHER_TEXT',incident.text)}}</b-col>
                    <b-col class="text-center">Tỷ số: {{incident.homeScore}} - {{incident.awayScore}}</b-col>
                </template>
                <template v-if="incident.incidentType === 'injuryTime'">
                    <b-col class="general-incident text-center">{{ this.getSub('INCIDENT_TYPE',incident.incidentType)}} - {{this.getSub('OTHER_TEXT',incident.length)}} phút</b-col>
                </template>
            </b-row>
            <b-row v-if="incident.isHome" class="incident-item align-items-start" :class="'incident-item-'+incident.incidentType">
                <!-- Substitution -->
                <template v-if="incident.incidentType === 'substitution'">
                    <b-col class="incident-type-home col-2 text-start d-inline p-0"> 
                        <img title="Thay người" class="m-0" :src="`${getImgUrl()}/icon/${incident.incidentType}.png`" width="25" center="true" round="5"/> 
                        <span class="d-inline">{{incident.time}}'</span> 
                        <span v-if="incident.addedTime" class="d-inline align-top added-time">+{{incident.addedTime}}</span>
                    </b-col>
                    <b-col class="incident-detail-home p-1">
                        <span class="p-1 player-in fw-bolder">In: {{incident.playerIn.shortName}}</span>
                        <span class="p-1 player-out fw-light">Out: {{incident.playerOut.shortName}}</span>
                    </b-col>
                </template>
                <!-- Goal -->
                <template v-if="incident.incidentType === 'goal'">
                    <b-col class="incident-type-home col-2 text-start d-inline p-0"> 
                        <img :title="`${this.getSub('INCIDENT_TYPE',incident.incidentType)} ${ this.getSub('INCIDENT_CLASS',incident.incidentClass)}`" class="m-0" :src="`${getImgUrl()}/icon/${incident.incidentType}_${incident.incidentClass}.png`" width="25" center="true" round="5"/> 
                        <span class="d-inline">{{incident.time}}'</span>
                        <span v-if="incident.addedTime" class="d-inline align-top added-time">+{{incident.addedTime}}</span>
                    </b-col>
                    <b-col class="incident-detail-home p-0 align-middle">
                        <span class="p-1 goal fw-bolder">{{incident.homeScore}} - {{incident.awayScore}}</span>
                        <span class="p-1 player">{{incident.player.shortName}}</span>
                    </b-col>
                </template>
                <!-- inGamePenalty -->
                <template v-if="this.normalIncident.includes(incident.incidentType)">
                    <b-col class="incident-type-home col-2 text-start d-inline p-0"> 
                        <img :title="`${this.getSub('INCIDENT_TYPE',incident.incidentType)} ${ this.getSub('INCIDENT_CLASS',incident.incidentClass)}`" class="m-0" :src="`${getImgUrl()}/icon/${incident.incidentType}_${incident.incidentClass}.png`" width="25" center="true" round="5"/> 
                        <span class="d-inline">{{incident.time}}'</span>
                        <span v-if="incident.addedTime" class="d-inline align-top added-time">+{{incident.addedTime}}</span>
                    </b-col>
                    <b-col class="incident-detail-home p-0 align-middle">
                        <span class="p-1 player fw-bolder">{{incident.player.shortName}}</span>
                        <span class="p-1 player">{{ this.getSub('INCIDENT_TYPE',incident.incidentType)}} {{ this.getSub('INCIDENT_CLASS',incident.incidentClass)}}</span>
                    </b-col>
                </template>

            </b-row>
            <b-row v-if="!incident.isHome" class="incident-item align-items-end" :class="'incident-item-'+incident.incidentType">
                <!-- Substitution -->
                <template v-if="incident.incidentType === 'substitution'">
                    <b-col class="incident-detail-home p-1 text-end">
                        <span class="p-1 player-out fw-light">Out: {{incident.playerOut.shortName}}</span>
                        <span class="p-1 player-in fw-bolder">In: {{incident.playerIn.shortName}}</span>
                    </b-col>
                    <b-col class="incident-type-away col-2 text-end d-inline p-0"> 
                        <img class="m-0" :src="`${getImgUrl()}/icon/${incident.incidentType}.png`" width="25" center="true" round="5"/> 
                        <span class="d-inline">{{incident.time}}'</span>
                        <span v-if="incident.addedTime" class="d-inline align-top added-time">+{{incident.addedTime}}</span>
                    </b-col>
                </template>
                <!-- Goal -->
                <template v-if="incident.incidentType === 'goal'">
                    <b-col class="incident-detail-away p-0 align-middle text-end">
                        <span class="p-1 goal fw-bolder">{{incident.homeScore}} - {{incident.awayScore}}</span>
                        <span class="p-1 player">{{incident.player.shortName}}</span>
                    </b-col>
                    <b-col class="incident-type-away col-2 text-end d-inline p-0"> 
                        <img :title="`${this.getSub('INCIDENT_TYPE',incident.incidentType)} ${ this.getSub('INCIDENT_CLASS',incident.incidentClass)}`" class="m-0" :src="`${getImgUrl()}/icon/${incident.incidentType}_${incident.incidentClass}.png`" width="25" center="true" round="5"/> 
                        <span class="d-inline">{{incident.time}}'</span>
                        <span v-if="incident.addedTime" class="d-inline align-top added-time">+{{incident.addedTime}}</span>
                    </b-col>
                </template>
                <!-- inGamePenalty -->
                <template v-if="this.normalIncident.includes(incident.incidentType)">
                    <b-col class="incident-detail-away p-0 align-middle text-end">
                        <span class="p-1 player">{{ this.getSub('INCIDENT_TYPE',incident.incidentType)}} {{ this.getSub('INCIDENT_CLASS',incident.incidentClass)}}</span>
                        <span class="p-1 player fw-bolder">{{incident.player ? incident.player.shortname : incident.manager.shortName}}</span>
                    </b-col>
                    <b-col class="incident-type-away col-2 text-end d-inline p-0"> 
                        <img :title="`${this.getSub('INCIDENT_TYPE',incident.incidentType)} ${ this.getSub('INCIDENT_CLASS',incident.incidentClass)}`" class="m-0" :src="`${getImgUrl()}/icon/${incident.incidentType}_${incident.incidentClass}.png`" width="25" center="true" round="5"/> 
                        <span class="d-inline">{{incident.time}}'</span>
                        <span v-if="incident.addedTime" class="d-inline align-top added-time">+{{incident.addedTime}}</span>
                    </b-col>
                    
                </template>
            </b-row>
        </template>
    </div>
</template>
<script>
import { BRow, BCol, BImg } from 'bootstrap-vue';
import { getSub, getImgUrl } from '@/_helper/index.js';
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    data() {
        return {
            incidents: [],
            normalIncident: ['card', 'inGamePenalty', 'varDecision']
        }
    },
    methods: {
        ...mapActions('events', ['getIncidents']),
        getImgUrl, getSub
    },
    computed: {
        ...mapState({
            stored_incidents: state => state.events.incidents,
        }),
    },
    components: {
        BRow,
        BCol,
        BImg
    },
    async created() {
        this.incidents = this.stored_incidents;
    },
    watch: {
        stored_incidents() {
            this.incidents = this.stored_incidents;
        }
    }
}

</script>
<style scoped>
.incident-item {
    margin: 5px;
}

.incident-type-home {
    border-right: 1px solid grey;
}

.incident-type-away {
    border-left: 1px solid grey;
}

.general-incident {
    font-weight: 700;
    border-radius: 5px;
    width: fit-content;
}

.goal {
    font-size: large;
}

.incident-item-goal {
    background-color: rgb(255, 212, 171);
    border-radius: 5px;
}

.added-time {
    font-size: 10px;
}
</style>