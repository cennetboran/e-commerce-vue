<template>
  <v-app-bar app color="#fdf3f3" class="app-bar">
    <HeaderPage />
  </v-app-bar>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'NavbarPage',
  components: {
    HeaderPage,
  },
  data: () => ({
    items: [
      { title: 'HomePage', path: '/', icon: 'HomePage' },
      { title: 'AboutPage', path: '/AboutPage', icon: 'AboutPage' },
      { title: 'DesignPage', path: '/DesignPage', icon: 'DesignPage' },
      { title: 'GiftPage', path: '/GiftPage', icon: 'DesignPage' },
      { title: 'AboutUs', path: '/AboutUs', icon: 'AboutUs' },
    ],
  }),
};
</script>
<style>
.deep-orange {
  position: absolute;
  top: 17%;
  left: 15%;
  color: blue;
}
.app-bar {
  background-color: rgb(232, 255, 254);
}
</style>
