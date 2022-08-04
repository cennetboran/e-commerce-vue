<template>
  <div>
    <div class="container container-space">
      <div class="row">
        <div class="col-md-6">
          <img class="img-fluid" :src="bannerImage" alt="" />
          <div class="product-thumbnails">
            <ul>
              <li
                v-for="(image, index) in productImages"
                :class="[activeClass == index ? 'thumbnail-active' : '']"
                :key="index"
              >
                <img @click="currentThumnail(image.imageUrl, index)" :src="image.imageUrl" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <h1 class="my-4">{{ productTitle }} - {{ productPrice }}</h1>
          <h3 class="my-3">
            <svg width="36" height="36" viewBox="0 0 24 24">
              <path
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
              />
            </svg>
            {{ cart }}
          </h3>

          <h3 class="my-3">Details</h3>
          <ul v-for="detail in productChecks" :key="detail">
            <li>{{ detail }}</li>
          </ul>
          <button
            type="button"
            class="btn btn-outline-primary btn-block btn-custom-color"
            @click="addToCart"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    productTitle: 'Pink Flower',
    productPrice: '$20',
    productChecks: [
      '100% cotton on the neckline',
      'certified and safe',
      'ash in color',
      'Smooth in quality',
    ],
    bannerImage: 'https://i.imgur.com/DR9Ziyu.jpeg',
    productImages: [
      {
        id: 3435,
        imageUrl: 'https://i.imgur.com/DR9Ziyu.jpeg',
      },
      {
        id: 3436,
        imageUrl: 'https://i.imgur.com/uAhjMNd.jpeg',
      },
    ],
    cart: 0,
    stockAvailability: true,
    activeClass: 0,
  }),
  methods: {
    ddToCart: function () {
      this.cart = this.cart + 1;
    },
    currentThumnail: function (image, index) {
      this.bannerImage = image;
      this.activeClass = index;
    },
  },
};
</script>
<style>
body {
  font-family: 'Nunito', sans-serif;
  background-color: #eeeeee;
}
.container-space {
  margin-top: 2rem;
}
.product-thumbnails {
  display: flex;
  margin-top: 2rem;
}
.product-thumbnails > ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.product-thumbnails > li {
  margin-right: 10px;
}
.product-thumbnails > ul > li > img {
  width: 100px;
  cursor: pointer;
}
.thumbnail-active {
  border: 2px solid #000;
}
.nav-link > img {
  width: 40px;
  border-radius: 8px;
  margin-right: 10px;
}
.btn-custom-color {
  border: 2px solid #4fc08d;
  color: #4fc08d;
}
.btn {
  width: 133% !important;
  height: 7% !important;
}
.btn-custom-color:hover {
  border: 2px solid #4fc08d;
  background-color: #4fc08d;
  color: #ffffff;
}
</style>
