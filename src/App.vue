<template>
<div id="app">
        <NavbarPage />
<router-view></router-view>
<FooterPage />
  </div>
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue"
import FooterPage from "./components/FooterPage.vue"
export default {
  name: "App",
  components: {
        NavbarPage,
        FooterPage,
        
  }
}
</script>

<style>

</style>
