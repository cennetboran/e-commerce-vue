<template>
    <div class="Baket">
   

  <button class="btn-31">
  <span class="text-container">
    <span class="text">Basket</span>
  </span>
</button>
</div>
</template>
<style>
/* .btn{
    position: absolute;
    top:5%;
    left: 83%;
    width:100px;
     border: 1px solid #00B4CC;
  background: #00B4CC;
  


}
:hover.btn{
         border:  #00B4CC;
         color: lightblue;

} */

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400;800|Poppins:900);

.btn-31 {
  display: block;
  box-sizing: border-box;
  padding: 10px 45px;
   position: absolute;
   top:4%;
  left: 77%;
  color: white;
  background: none;
  text-transform: uppercase;
  border: 1px solid rgb(75, 147, 168);
}
.btn-31:before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  --progress: 100%;
  background: white;
  clip-path: polygon(100% 0, var(--progress) var(--progress), 0 100%, 100% 100%);
  transition: clip-path 0.2s;
}
.btn-31:hover:before {
  --progress: 0%;
}
.btn-31 .text-container {
  display: block;
  position: relative;
  overflow: hidden;
}
.btn-31 .text {
  display: block;
  position: relative;
  font-weight: 600;
  mix-blend-mode: difference;
}
.btn-31:hover .text {
  animation: move-up-alternate 0.3s forwards;
  will-change: transform;
}
@keyframes move-up-alternate {
  from {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0%);
  }
}




</style>