<template>
  <div class="HomePage">
    <SliderPage />
    <CardPage />
    <MekupPage />
  </div>
</template>

<script>
import MekupPage from './MekupPage.vue';
import CardPage from './CardPage.vue';
import SliderPage from './SliderPage.vue';
export default {
  name: 'HomePage',
  components: {
    CardPage,
    SliderPage,
    MekupPage,
  },
};
</script>
