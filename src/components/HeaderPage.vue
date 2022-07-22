<template>
    <div class="headerpage">
        <div class="logo">
          <img src="https://www.resimupload.org/images/2022/07/19/blue-flower-logo-B85CFDA3AE-seeklogo.com.th.png" class="logo"/>
        </div>
     <SearchPage />
<BasketPage />

        <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </div>

    <!-- CSS only -->
    
</template>
<script>
import BasketPage from "../components/BaksetPage.vue"
import SearchPage from "../components/SearchPage.vue"
export default {
  components:{
    SearchPage,
    BasketPage,
  }
}
</script>
<style >
.logo{
height: 60px;
margin-left: 90%;
}

</style>