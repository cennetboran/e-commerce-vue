<template>
  <v-app class="nav">
    <v-toolbar >
      <v-toolbar-items class="hidden-xs-only">
        <v-btn  flat plain v-for="item in menuItems" :key="item.title" :to="item.path" >
          {{ item.title }}
          
        </v-btn>
  <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        flat plain
          color="dark"
          v-bind="attrs"
          v-on="on"
          

        >
          Gift
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
          </v-menu>

        
      </v-toolbar-items>
    </v-toolbar>

  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "home" },
        { title: "Flower", path: "/FlowerPage" },
        { title: "Design", path: "/DesignPage", icon: "lock_open" },
      ],
 items: [
        { title: "Home", path: "/", icon: "Home" },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
};
  },
};
</script>
<style>
.nav{
    position:absolute;
    height:"15%" ;
    top:6%;
    left: 7%;
    width: 0%;

}
.hidden-xs-only{
    border-radius: 5px 5px 5px 5px;


}
.btn{
  width: 110px;
  height: 900px;
  text-align: center !important;
}
</style>
