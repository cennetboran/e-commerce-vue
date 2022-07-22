<template>
    <div class="HomePage">
       <SliderPage />
       <CardPage />
    </div>
</template>

<script>
import SliderPage from "./SliderPage.vue"
import CardPage from "./CardPage.vue"
export default {
    name: "HomePage",
    components: {
  SliderPage,
  CardPage
    }
}
</script>
