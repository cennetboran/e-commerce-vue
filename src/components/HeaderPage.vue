<template>
  <div class="headerpage">
    <div class="logo">
      <img src="https://imgyukle.com/f/2022/08/01/VfSCdN.png" class="logo" />
    </div>
    <SearchPage />
    <BasketPage />
    <nav-page />

    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
  </div>

  <!-- CSS only -->
</template>
<script>
import BasketPage from '../components/BaksetPage.vue';
import SearchPage from '../components/SearchPage.vue';
import NavPage from './NavPage.vue';
export default {
  components: {
    SearchPage,
    BasketPage,
    NavPage,
  },
};
</script>
<style>
.logo {
  height: 60px;
  margin-left: 30%;
}
</style>
