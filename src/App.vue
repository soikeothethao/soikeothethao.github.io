<script>
import { RouterLink, RouterView } from 'vue-router'
import { BRow } from 'bootstrap-vue'
export default {
  data() {
    return {
      showIntro: this.$isMobile() ? true : false
    }
  },
  methods: {
    onVideoEnded() {
      this.showIntro = false;
    }
  }
}
</script>
<template>
  <div>
    <template v-if="!$isMobile()">
      <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
      <b-row class="bg-main">
        <RouterView />
      </b-row>
    </template>
    <template v-else>
      <div v-if="showIntro" class="intro d-flex align-items-center h-100">
        <video autoplay muted @ended="onVideoEnded" class="intro-video">
          <source src="assets/intro/intro.mp4" type="video/ogg">
        </video>
      </div>
      <b-row class="bg-main">
        <RouterView />
      </b-row>
    </template>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

body {
  background-color: black;
}

.bg-main {
  background-color: #edf1f6;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */

}

.intro-video {
  width: 100%;
}

.intro {
  background-color: black;
  position: absolute;
  z-index: 1000;
  height: 100%;
}
</style>
