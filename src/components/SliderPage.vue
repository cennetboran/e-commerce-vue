<template>
  <div id="slider">
    <Carousel :navigationEnabled="true">
      <Slide v-for="index in 8" :key="index">
      <img src="https://dummyimage.com/600x400/333333/fff">
      </Slide>

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
  
}
.VueCarousel-slide {
  width: 940px;
  padding: 0 10%;
}
.VueCarousel-slide img {
  width: 90%;
  display: block;
}
</style>
