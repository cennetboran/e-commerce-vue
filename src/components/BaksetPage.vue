<template>
  <div class="Baket">
    <button class="btn-31">
      <span class="text-container">
        <span class="text">Basket</span>
      </span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400;800|Poppins:900);

.btn-31 {
  display: block;
  box-sizing: border-box;
  padding: 9px 45px;
  position: absolute;
  top: 15.4%;
  left: 77%;
  color: #724060;
  background: none;
  text-transform: uppercase;
  border: 1px solid #724060;
  border-radius: 5px 5px 5px 5px;
}
.btn-31:before {
  content: '';
  z-index: -1;
  position: absolute;
  inset: 0;
  --progress: 100%;
  background: #f8ecf2;
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
