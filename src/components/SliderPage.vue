<template>
  <div id="slider">
    <carousel :per-page="4">
      <slide v-for="item in items" :key="item">
        <img src="https://dummyimage.com/600x400/333333/fff">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel-variable-width";

export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
body {
  margin: 0;
}
#slider {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.VueCarousel-slide {
  width: 340px;
  flex-basis: initial;
  padding: 0 10px;
}
.VueCarousel-slide img {
  width: 100%;
  display: block;
}
</style>
