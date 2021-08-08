<template>
    <card-component> 

        <nav class="nav justify-content-center">
            <router-link to="/login" class="btn btn-outline-primary nav-link text-white px-5 mr-4">LOGIN</router-link>
            <router-link to="/register" class="btn btn-outline-primary nav-link text-white px-4">REGISTRAR</router-link>
        </nav>
        
    </card-component>
</template>

<script>

import cardComponent from '../components/cardComponent.vue'

export default {
    name: 'Home',
    components: { cardComponent },
    created() {
        this.$store.state.colSize = 'col-5'
    }
}
</script>