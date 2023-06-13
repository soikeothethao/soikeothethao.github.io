<template lang="">
    <div v-if="!$isMobile()">
    <Header></Header>
    <BRow class="m-3">
      <b-col class="col-2 mr-2 p-1">
        <b-card-title class="text-info text-center mb-2">Giải Đấu</b-card-title>
        <StandingTournamentList></StandingTournamentList>
      </b-col>
      <b-col class="col-10 mr-2">
        <b-card>
          <SeasonHeader></SeasonHeader>
          <StandingItem></StandingItem>
        </b-card>
      </b-col>
    </BRow>
  </div>
</template>
<script>
import Header from '@/components/Header/Header.vue'
import StandingTournamentList from '@/components/Standing/StandingTournamentList.vue'
import StandingItem from '@/components/Standing/StandingItem.vue'
import SeasonHeader from '@/components/Standing/SeasonHeader.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header,
    StandingTournamentList,
    StandingItem,
    SeasonHeader
  }
}
</script>
<style lang="">
    
</style>