<template>
    <div>
        <b-row class="bg-dark border-light">
            <b-col class="col-1">
                <b-img v-bind="mainProps" left fluid :src="logo" alt="Image 1" rounded="0"></b-img>
            </b-col>
            <b-col class="col-8">
                <!-- <b-input-group class="mt-3">
                    <b-form-input v-model="search" placeholder="Tìm kiếm"></b-form-input>
                </b-input-group> -->
                <div class="d-flex align-items-center h-100">
                    <h3 class="app-name">
                        Soi Kèo Bóng Đá
                    </h3>
                </div>
            </b-col>
        </b-row>
        <b-row class="bg-dark border-light">
            <b-navbar variant="faded" type="dark" class="mx-auto main-menu" style="width: auto;">
                <b-navbar-nav>
                    <b-button-group>
                        <router-link to="/"><b-button :variant="this.$route.name === 'home' ? 'success' : 'secondary'">Lịch
                                Thi Đấu</b-button></router-link>
                        <router-link to="/bang-xep-hang/ngoai-hang-anh"><b-button
                                :variant="this.$route.name === 'standing' ? 'success' : 'secondary'">Bảng Xếp
                                Hạng</b-button></router-link>
                    </b-button-group>
                </b-navbar-nav>
            </b-navbar>

        </b-row>

    </div>
</template>
<script setup>
import { BNavbar, BNavbarNav, BNavItem, BContainer, BRow, BCol, BImg, BCard, BInputGroup, BInputGroupAppend, BFormInput, BButton, BInputGroupText, BNavText, BBadge, BButtonGroup } from 'bootstrap-vue'
import { ref, onMounted, onUpdated } from 'vue'

const mainProps = { width: 75, height: 75, class: 'm1' };
const logo = new URL('/assets', import.meta.url).href + '/image/logo.png'
// var search = "";
// const el = ref();
// onMounted(() => {
//     search = "okok"
// })
</script>
<style scoped>
.app-name {
    color: azure !important;
}
</style>