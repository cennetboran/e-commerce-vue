<template>
  <div>
    <v-row>
      <v-card class="card-1" max-width="344" v-for="item in items" :key="item.id">
        <img :src="item.image" height="200px" />
        <v-card-title>
          <h3 class="headline mb-0" v-text="item.itemName"></h3>
        </v-card-title>
        <v-card-subtitle> {{ item.desc }} </v-card-subtitle>
        <v-card-actions>
          <router-link
            :to="{
              path: '/productDetail',
              query: {
                id: item.id,
              },
            }"
            tag="v-btn"
          >
            <button color="orange lighten-2" text><span>Explore</span></button>
          </router-link>
          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You
              won't have time for sleeping, soldier, not with all the bed making you'll be doing.
              Then we'll go with that data file! Hey, you add a one and two zeros to that or we
              walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      {
        id: 1,
        itemName: 'Flowers',
        desc: 'Flower',
        image: 'https://imgyukle.com/f/2022/08/01/VfulD8.jpg',
      },
      {
        id: 2,
        itemName: 'Gift',
        desc: 'Gift',
        image: 'https://imgyukle.com/f/2022/08/01/VfRADc.jpg',
      },
      {
        id: 3,
        itemName: 'Design',
        desc: 'Design',
        image: 'https://imgyukle.com/f/2022/08/01/VfuGDY.jpg',
      },
    ],
  }),
};
</script>
<style>
.card-1 {
  left: 300px;
  margin-top: 90px !important;
  margin-left: 90px !important;
  flex-wrap: wrap;
}
.card-1:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
