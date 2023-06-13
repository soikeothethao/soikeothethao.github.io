<template lang="">
    <div>
        <b-row class="bg-info p-2 rounded mb-2">
            <b-col v-if="this.season.name" class="col-5">
                <h3>{{this.season.name}}</h3>
                
                <!-- <b-img :src="`${getImgUrl()}/flags/${tournamentItem.slug}.png`" width="40%" center="true" round="5"></b-img> -->
            </b-col>
            <b-col v-else>
                <b-skeleton type="button"></b-skeleton>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { getTopUniqueTournament, getImgUrl } from '@/_helper/index.js'
import { BCol, BRow, BSkeleton } from 'bootstrap-vue'
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            season: {},
        }
    },
    components: {
        BCol, BRow, BSkeleton
    },
    computed: {
        ...mapState({
            res_season: state => state.standing.season,
        }),
    },
    created() {
        this.season = this.res_season;
    },
    watch: {
        res_season() {
            this.season = this.res_season;
        }
    },
    methods: {
        getImgUrl
    }

}
</script>
<style lang="">
    
</style>