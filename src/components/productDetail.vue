<template>
  <div>
    <div>selamlar</div>
    <v-row>
      <v-card class="productDetail" max-width="344" v-for="item in products" :key="item.productId">
        <img height="180px" :src="'https://imgyukle.com/f/2022/08/01/VfRfKs.jpg'" />
        <v-card-title>
          <h3 class="headline mb-0" v-text="item.itemName"></h3>
        </v-card-title>
        <v-card-subtitle>
          <h1>{{ item.category }}</h1>
        </v-card-subtitle>
        <v-card-actions>
          <router-link to="productDetail" tag="v-btn">
            <v-btn color="orange lighten-2" text><span>Explore</span> </v-btn>
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
              {{ item.instructions }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </div>
</template>
<script>
import { flower } from '../lib/flower';
export default {
  data: () => ({
    products: [],
    flower,
  }),

  computed: {},
  mounted() {
    const id = this.$route?.query?.id;
    if (id) {
      // data get logic
      if (id == 1) {
        this.products = this.flower;
      }
      if (id == 2) {
        this.products = this.gift;
      }
      if (id == 3) {
        this.products = this.desing;
      }

      console.log(id);
    }
  },
};
</script>
