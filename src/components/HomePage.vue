<template>
    <div class="HomePage">
        <SliderPage />
        <CardPage />
    </div>
</template>

<script>
import CardPage from "./CardPage.vue"
import SliderPage from "./SliderPage.vue"
export default {
    name: "HomePage",
    components: {
        CardPage,
        SliderPage
  
    }
}
</script>
