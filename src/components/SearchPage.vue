<template>
    <div>
       <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body{
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

.searchTerm:focus{
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
.wrap{
  width: 30%;
  position:absolute;
  top: 10%;
  bottom: 90%;
  left: 46%;
  transform: translate(-50%, -50%);
}
</style>