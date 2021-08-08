<template>
    <card-component>

        <!-- Form Login -->
        <form @submit.prevent="login">
            <div class="form-group">
                <label class="text-white" for="">E-mail de Login <span class="text-danger">*</span></label>
                <input type="text" v-model="user.email" class="form-control inputField" placeholder="email@gmail.com">
            </div>
            <div class="form-group">
                <label class="text-white" for="">Senha de Acesso <span class="text-danger">*</span></label>
                <input type="password" v-model="user.password" class="form-control inputField" placeholder="senha123#">
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block inputButton">Entrar Agora<span><img src="../assets/icone-seta-lecdt.svg" class="float-right my-2" style="height:17px"></span></button>                              
            </div>
        </form>
        
        <!-- Route to Register -->
        <div class="text-center mb-2">
            <h6 class="d-flex justify-content-center align-items-center">Não tem uma conta? <router-link to="/register" class="nav-link">Crie Agora.</router-link></h6>
        </div>

        <!-- Alert Component -->
        <div v-if="$store.getters.getErrorExist">
            <alert-component> {{ $store.getters.getError }} </alert-component>        
        </div>
      
    </card-component>
</template>

<script>
import axios from 'axios'

import cardComponent from '../components/cardComponent.vue'
import alertComponent from '../components/alertComponent.vue'

export default {
    name: 'Login',
    components: { cardComponent, alertComponent },
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            error: ''
        }
    },
    created() {
        this.$store.state.colSize = 'col-4'
    },
    methods: {
        
        // Login Logic
        async login() {

            const response = await axios.post('login', this.user)

            if(response.data.error) {
                this.$store.dispatch('setError', response.data.error)
                this.$store.commit('setErrorExist', true)

            } else { 
                this.$store.dispatch('setUser', response.data)
                console.log(this.$store.getters.getUser)
                localStorage.setItem('token', response.data.token)
                this.$router.push('/user/' + response.data.email)
            }
        }
    }
}
</script>
