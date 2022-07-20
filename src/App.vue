<template>
<div id="app">

<router-view></router-view>
  <HomePage/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: "App",
  components: {
    HomePage
  }
}
</script>

<style>

</style>
