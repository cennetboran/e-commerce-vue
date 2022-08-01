<template>
  <div id="slider">
    <carousel :per-page="3" v-bind:autoplay="true" v-bind:loop="true">
      <slide v-for="item in items" :key="item">
        <img :src="item.src" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel-variable-width';

export default {
  data() {
    return {
      //items: [1, 2, 3, 4, 5, 6,7,8],
      items: [
        { id: 1, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfS2fS.jpg' },
        { id: 2, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfSWSb.jpg' },
        { id: 3, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfuIHI.jpg' },
        { id: 4, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfS41P.jpg' },
        { id: 5, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfuHxS.jpg' },
        { id: 6, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfujQQ.jpg' },
        { id: 7, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfS2fS.jpg' },
        { id: 8, itemName: 'asdsa', src: 'https://imgyukle.com/f/2022/08/01/VfS41P.jpg' },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style>
body {
  margin: 0;
}
#slider {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.VueCarousel-slide {
  width: 240px;
  flex-basis: initial;
  padding: 0 10px;
}
.VueCarousel-slide img {
  width: 100%;
  display: block;
}
</style>
