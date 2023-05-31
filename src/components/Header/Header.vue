<template>
    <div>
        <b-row class="bg-dark border-light">
            <b-col class="col-3">
                <b-img v-bind="mainProps" left fluid :src="logo" alt="Image 1" rounded="0"></b-img>
            </b-col>
            <b-col class="col-8">
                <!-- <b-input-group class="mt-3">
                    <b-form-input v-model="search" placeholder="Tìm kiếm"></b-form-input>
                </b-input-group> -->
                <div class="d-flex align-items-center h-100">
                    <h3 class="app-name">
                        Lịch Thi Đấu Bóng Đá
                    </h3>
                </div>
            </b-col>
        </b-row>
        <!-- <b-row class="bg-dark border-light">
            <b-navbar type="dark" variant="dark" class="mx-auto" style="width: auto;">
                <b-navbar-nav>
                    <b-nav-item href="#">Home1</b-nav-item>
                    <b-nav-item href="#">Home2</b-nav-item>
                    <b-nav-item href="#">Home3</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </b-row> -->
    </div>
</template>
<script setup>
import { BNavbar, BNavbarNav, BNavItem, BContainer, BRow, BCol, BImg, BCard, BInputGroup, BInputGroupAppend, BFormInput, BButton, BInputGroupText } from 'bootstrap-vue'
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
    color: azure;
}
</style>