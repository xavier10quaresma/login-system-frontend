<template>
    <card-component>

        <form @submit.prevent="register">

            <form-register />

        </form>
      
    </card-component>
</template>

<script>

import axios from 'axios'
import cardComponent from '../components/cardComponent.vue'
import formRegister from '../components/formRegister.vue'


export default {
    name: 'Register',
    components: { cardComponent, formRegister },
    created() {
        this.$store.state.colSize = 'col-4'
    },
    methods: {
        async register() {

            const data = this.$store.getters.getUser
            const response = await axios.post('register', data)

            if(response.data.error) {
                this.$store.dispatch('setError', response.data.error)
                this.$store.commit('setErrorExist', true)

            } else {
                this.$router.push('/login')
            }            

        }
    },

    beforeRouteLeave(to, from, next) {
        this.$store.commit('setErrorExist', false)
        next()
    }
}
</script>