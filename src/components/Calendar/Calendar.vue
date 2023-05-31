<template lang="">
    <div class="text-center bg-white">
          <b-calendar class="w-100 border rounded " v-model="event_date" @context="onContext" locale="vi" selected-variant="success"
    today-variant="info" nav-button-variant="primary" label-help="" label-selected="Chọn ngày" hide-header="true" label-today="Hôm nay"></b-calendar>
    </div>
</template>
<script>
import { BCalendar, BCard } from 'bootstrap-vue'
import { mapState, mapActions, mapMutations } from "vuex";
import router from "@/router";
export default {
    data() {
        return {
            event_date: '',
            context: null
        }
    },
    components: {
        BCalendar,
        BCard
    },
    methods: {
        ...mapActions('events', ['getEvents']),
        ...mapMutations('events', ['setEventDate']),

        async onContext(ctx) {
            this.context = ctx
            let date = this.context.activeDate
            if (this.context.activeYMD !== this.stored_event_date) {
                this.setEventDate(this.context.activeYMD);
                // if (date.toDateString() !== new Date().toDateString()) {
                //     // window.location.href = '/lich-thi-dau-ngay-' + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
                //     router.push('/lich-thi-dau-ngay-' + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())
                //     // router.push('/about')
                //     // window.location.reload()
                // } else {
                //     let slug = this.$route.params.dateString;
                //     if (slug && slug !== "/") {
                //         router.push('/')
                //     }
                // }
            }

        }
    },
    computed: {
        ...mapState({
            stored_events: state => state.events.events,
            stored_event_date: state => state.events.event_date,
        }),
    },
    created() {
        // let slug = this.$route.params.dateString;

        // if (slug && slug !== "") {
        //     let dateString = slug.split('lich-thi-dau-ngay-')[1]
        //     let datesplit = dateString.split('-');
        //     this.event_date = new Date(datesplit[2], (datesplit[1] - 1), datesplit[0])
        // } else {
        //     this.event_date = new Date()
        // }
        this.event_date = new Date()
    },
}
</script>
<style type="text/css">
.b-calendar .b-calendar-inner {
    width: 100% !important
}
</style>