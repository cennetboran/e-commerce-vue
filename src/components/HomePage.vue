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
    components: {
        HeaderPage,
        NavbarPage
    }
}
</script>
