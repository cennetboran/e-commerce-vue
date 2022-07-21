<template>
  <div id="slider">
    <Carousel :navigationEnabled="true">
      <Slide v-for="index in 8" :key="index">
      <img src="https://dummyimage.com/600x400/333333/fff">

          {{ index }}
      </Slide>

      // how to customize navigation button??
      <div class="navigation" slot="navigation"></div>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
#slider {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.VueCarousel-slide {
  width: 440px;
  padding: 0 15%;
}
.VueCarousel-slide img {
  width: 100%;
  display: block;
}
</style>
