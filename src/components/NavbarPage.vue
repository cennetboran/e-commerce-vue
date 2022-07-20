<template>

 <nav class="navbar navbar-expand-lg ">

  <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarpage" aria-controls="navbarpage" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/" class="nav-item nav-link" active-class="active" exact>Home</router-link>
          <router-link to="/FlowerPage" class="nav-item nav-link" active-class="active" exact>Flowers</router-link> 
          <router-link to="/BirthdayPage" class="nav-item nav-link" active-class="active" exact>Birthday</router-link> 
          <router-link to="/GiftPage" class="nav-item nav-link" active-class="active" exact>Gift</router-link> 
          <router-link to="/UsPage" class="nav-item nav-link" active-class="active" exact>Us</router-link> 
      </div>
      
    </div>
  </div>

</nav> 

</template>
<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'NavbarPage',
    components: {
        
    },
}
</script>
<style >

 .navbar{
   border:1px solid rgba(209, 209, 209, 0.582) ;
   
 }
 .container-fluid{
   position: relative;
   left: 15%;
   width: 15%;
   height: 15%;
 }
</style>
