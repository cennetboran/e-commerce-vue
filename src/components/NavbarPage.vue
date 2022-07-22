<template>
 <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="app-bar"
    >
    <HeaderPage />
 

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>


</template>
<script>
import HeaderPage from "./HeaderPage.vue"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'NavbarPage',
    components: {
        HeaderPage
    },
    
}
</script>
<style >

 .navbar{
   border:1px solid rgba(209, 209, 209, 0.582) ;
   
 }
 .container-fluid{
   position: relative;
   left: 15%;
   width: 5%;
   height: 25%;
 }
 .app-bar{

 }
</style>

