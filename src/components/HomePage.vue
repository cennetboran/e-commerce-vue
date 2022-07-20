<template>
    <div class="HomePage">
        <HeaderPage />
        <NavbarPage />
    </div>
</template>

<script>
import NavbarPage from "../components/NavbarPage.vue"
import HeaderPage from './HeaderPage.vue'

export default {
    name: "HomePage",
    components: {
        HeaderPage,
        NavbarPage
    }
}
</script>
