<template>
    <div class="headerpage">
        <div class="logo">
          <img src="https://www.resimupload.org/images/2022/07/19/blue-flower-logo-B85CFDA3AE-seeklogo.com.th.png" class="logo"/>
        </div>
     <SearchPage />
<BasketPage />
        
    </div>

    <!-- CSS only -->
</template>
<script>
import BasketPage from "../components/BaksetPage.vue"
import SearchPage from "../components/SearchPage.vue"
export default {
  components:{
    SearchPage,
    BasketPage
  }
}
</script>
<style >
.logo{
height: 100px;
margin-left: 8%;
}

</style>