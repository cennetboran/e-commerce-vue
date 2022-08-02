<template>
  <div class="HomePage">
    <SliderPage />
    <CardPage />
    <MekupPage />
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import MekupPage from './MekupPage.vue';
import CardPage from './CardPage.vue';
import SliderPage from './SliderPage.vue';
import BackToTop from 'vue-backtotop';

export default {
  name: 'HomePage',
  components: {
    CardPage,
    SliderPage,
    MekupPage,
    BackToTop,
  },
};
</script>
<style>
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
