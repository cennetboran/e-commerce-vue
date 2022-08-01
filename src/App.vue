<template>
  <div id="app">
    <NavbarPage />
    <div class="main-div"><router-view></router-view></div>
    <FooterPage />
  </div>
</template>

<script>
import NavbarPage from './components/NavbarPage.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  name: 'App',
  components: {
    NavbarPage,
    FooterPage,
  },
};
</script>

<style>
.main-div {
  margin-top: 90px;
}
</style>
