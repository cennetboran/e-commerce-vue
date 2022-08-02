<template>
  <div>
    <v-row>
      <v-card class="productDetail" max-width="344" v-for="item in products" :key="item.productId">
        <img height="180px" :src="'https://imgyukle.com/f/2022/08/01/VfRfKs.jpg'" />
        <v-card-title>
          <h3 class="headline mb-0" v-text="item.name"></h3>
        </v-card-title>
        <v-card-subtitle>
          <h5>{{ item.category }}</h5>
        </v-card-subtitle>
        <v-card-actions>
          <router-link to="productDetail" tag="v-btn">
            <v-btn color="orange lighten-2" text
              ><span>{{ item.price }}</span>
            </v-btn>
          </router-link>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-expand-transition>
              <div v-show="show">
                <v-card-text>
                  {{ item.instructions }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-btn>
        </v-card-actions>
        <button @click="addToCart(item)" class="btn btn-sm btn-primary" style="height: 33px">
          Add to Cart
        </button>
      </v-card>
    </v-row>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
import { flower } from '../lib/flower';
import { gift } from '../lib/gift';
import { design } from '../lib/design';
import BackToTop from 'vue-backtotop';

export default {
  data: () => ({
    products: [],
    flower,
    gift,
    design,
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
        this.products = this.design;
      }

      console.log(id);
    }
  },
  methods: {
    // Add Items to cart
    addToCart(itemToAdd) {
      // Add the item or increase qty
      let itemInCart = this.cartItems.filter((item) => item.id === itemToAdd.id);
      let isItemInCart = itemInCart.length > 0;

      if (isItemInCart === false) {
        // eslint-disable-next-line no-undef
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      } else {
        itemInCart[0].qty += itemToAdd.qty;
      }

      itemToAdd.qty = 1;
    },
  },
  components: {
    BackToTop,
  },
};
</script>
<style>
.productDetail {
  margin-left: 90px !important;
  margin-bottom: 35px;
}
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
