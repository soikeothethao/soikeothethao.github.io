<template>
  <div v-if="!$isMobile()">
    <Header></Header>
    <BRow class="m-5">
      <b-col class="col-3 mr-2 p-1">
        <Calendar class="w-100"></Calendar>
      </b-col>
      <b-col class="col-6 mr-2">
        <b-card>
          <Tournaments></Tournaments>
        </b-card>
      </b-col>
      <b-col class="col-3 mr-2 p-1">
        <b-card v-if="Object.keys(stored_selected_event).length > 0">
          <MatchInfo class="w-100"></MatchInfo>
        </b-card>
        <b-card v-if="!stored_selected_event">

        </b-card>
      </b-col>
    </BRow>
  </div>
  <div v-else>
    <Header></Header>
    <!-- <BRow class="p-1">
      <Calendar class="w-100"></Calendar>
    </BRow> -->
    <BRow class="m-0 p-0">
      <!-- <b-col class="col-3 mr-2 p-1">
        <Calendar class="w-100"></Calendar>
      </b-col> -->
      <b-col class="col-12 m-0 p-0">
        <b-card class="m-0 p-0">
          <Tournaments class="small"></Tournaments>
        </b-card>
      </b-col>
      <!-- <b-col class="col-3 mr-2 p-1">
        <b-card v-if="Object.keys(stored_selected_event).length > 0">
          <MatchInfo class="w-100"></MatchInfo>
        </b-card>
        <b-card v-if="!stored_selected_event">

        </b-card>
      </b-col> -->
    </BRow>
  </div>
</template>
<script>
import MatchInfo from '@/components/MatchInfo/MatchInfo.vue'
import Calendar from '@/components/Calendar/Calendar.vue'
import Header from '@/components/Header/Header.vue'
import Tournaments from '../components/Tournament/Tournaments.vue';
import { BRow, BCol, BCard, BCardBody } from 'bootstrap-vue'
import { mapState } from "vuex";

export default {
  data() {
    return {}
  },
  components: {
    BRow, BCol, BCard,
    MatchInfo,
    Calendar,
    Header,
    Tournaments
  },
  computed: {
    ...mapState({
      stored_selected_event: state => state.events.selectedEvent,
    }),
  },
}
</script>