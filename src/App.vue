<template>
<div id="app">
   <HeaderPage />
        <NavbarPage />
<router-view></router-view>
<FooterPage />
  </div>
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue"
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from "./components/FooterPage.vue"
export default {
  name: "App",
  components: {
     HeaderPage,
        NavbarPage,
        FooterPage,
        
  }
}
</script>

<style>

</style>
