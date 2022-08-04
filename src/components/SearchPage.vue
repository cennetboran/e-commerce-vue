<template>
  <!-- <div>
    <div class="wrap">
      <div class="search">
        <input
          id="search"
          v-model="searchPayload"
          type="search"
          class="search"
          placeholder="What are you looking for?"
          @click="search()"
        />
      </div>
    </div>
    <v-expand-transition>
      <v-list>
        <div class="items-wrapper" id="items-wrapper">
          <v-list-item class="item-card" v-for="item in filteredItems" :key="item.productId">
            <p class="item-card__title">{{ item.category }}</p>
          </v-list-item>
        </div>
      </v-list>
    </v-expand-transition>
  </div> -->
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="search">
        <input
          id="search"
          v-on="on"
          v-bind="attrs"
          v-model="searchPayload"
          type="search"
          class="search1"
          placeholder="What are you looking for?"
        />
      </div>
    </template>
    <v-list>
      <v-list-item v-for="item in filteredItems" :key="item.productId" @click="search(item)">
        <v-list-item-title>{{ item.category }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import * as data from '../lib/flower';
export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      filteredItems: [],
      searchPayload: '',
    };
  },

  watch: {
    searchPayload: function () {
      console.log(this.searchPayload);

      if (this.searchPayload != '') {
        this.filteredItems = data.flower.filter((item) =>
          item.category.toLowerCase().includes(this.searchPayload.toLowerCase()),
        );
      }
    },
  },
  created: function () {},
  methods: {
    search(item) {
      console.log(item);
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body {
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  position: absolute;
  display: flex;
  left: 37%;
  top: 14%;
  border: 1px solid #f8c7ffdc;
  border-radius: 5px 5px 5px 5px;
  width: 30%;
  height: 70%;
}
.search:hover {
  box-shadow: 0 3px 12px 0 rgba(242, 178, 255, 0.171), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.search1 {
  width: 120%;
}

.searchButton {
  width: 40px;
  height: 45px;
  border: 1px solid #eceef8;
  background: #f1f5f5;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
</style>
