<template>
  <div>
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
    <div class="items-wrapper" id="items-wrapper">
      <div class="item-card" v-for="item in filteredItems" :key="item.productId">
        <h2 class="item-card__code">{{ item.productId }}</h2>
        <div class="item-card__icon-circle">
          <img :src="item.photo" alt="test" />
        </div>
        <p class="item-card__title">{{ item.category }}</p>
      </div>
    </div>
  </div>
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
      this.filteredItems = data.flower.filter((item) =>
        item.category.toLowerCase().includes(this.searchPayload.toLowerCase()),
      );
    },
  },
  created: function () {
    this.filteredItems = data.flower;
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
  width: 120%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 1px solid #f9fdfddc;
  border-right: none;
  padding: 5px;
  height: 45px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #f2f8f5;
  background-color: rgb(253, 253, 253);
}

.searchTerm:focus {
  color: #ecf8fa;
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

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;
  top: 10%;
  bottom: 90%;
  left: 46%;
  transform: translate(-50%, -50%);
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 2%;
  line-height: 30px;
  color: #464141;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 2%;
  line-height: 24px;
  color: #464141;
}
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: weight(regular);
  letter-spacing: 2%;
  line-height: 20px;
  color: #a2a4aa;
}

.items-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
/* item card */
.item-card {
  min-width: 160px;
  min-height: 180px;
  background-color: #f6f6f6;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 0;
}
.item-card__icon-circle {
  background-color: #fffcfc;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-card__icon-circle img {
  max-width: 60px;
  max-height: 60px;
  object-fit: contain;
}
.item-card__variety {
  color: #464141;
  text-align: center;
  margin: 15px auto 0 auto;
  text-transform: lowercase;
  text-transform: capitalize;
}
.item-card__title {
  font-weight: 500;
  color: #464141;
  margin: 15px auto 15px auto;
  text-transform: lowercase;
  text-transform: capitalize;
}
.item-card__code {
  color: #36b16c;
  margin: 15px auto 0 auto;
}
</style>
