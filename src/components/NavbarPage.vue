<template>

 <nav class="navbar navbar-expand-lg bg-light">

  <div class="container-fluid">
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarpage" aria-controls="navbarpage" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
        <ul>
         <li>   <router-link to="/" class="nav-item nav-link" active-class="active" exact>Home page</router-link></li> 
          <li> <router-link to="/FlowerPage" class="nav-item nav-link" active-class="active" exact>FlowerPage</router-link></li> 
             <!-- <router-link to="/BirthdayPage" class="nav-item nav-link" active-class="active" exact>BirthdayPage</router-link> -->
</ul>
          <!-- <Services title="Services" /> -->

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      
    </div>
  </div>

</nav> 

</template>
<script>
// import Services from '../components/ServicesPage.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'NavbarPage',
    components: {
        // Services
    },
}
</script>
<style >

</style>
