<template>
    <span>
        <!-- Form for Register -->
        <div class="form-group d-flex row">
            <div class="d-flex flex-column col-6">
                <label class="text-white" for="">Primeiro Nome <span class="text-danger">*</span></label>
                <input type="text" v-model="user.first_name" class="form-control inputField" placeholder="Xavier">
            </div>
            <div class="d-flex flex-column col-6">
                <label class="text-white" for="">Segundo Nome<span class="text-danger"></span></label>
                <input type="text" v-model="user.last_name" class="form-control inputField" placeholder="Quaresma">
            </div>
        </div>
        
        <div class="form-group">
            <label class="text-white" for="">E-mail <span class="text-danger">*</span></label>
            <input type="email" v-model="user.email" class="form-control inputField" placeholder="email@gmail.com">
        </div>

        <div class="form-group">
            <label class="text-white" for="">Senha <span class="text-danger">*</span></label>
            <input type="password" v-model="user.password" class="form-control inputField" placeholder="senha123#">
        </div>

        <div class="form-group">
            <button class="btn btn-primary btn-block inputButton">Registrar</button>                              
        </div>

        <!-- Alert Component -->
        <div v-if="$store.getters.getErrorExist">
            <alert-component> {{ $store.getters.getError }} </alert-component>        
        </div>
    </span>
</template>

<script>

import alertComponent from './alertComponent.vue'

export default {
    name: 'FormRegister',
    components: { alertComponent },
    data() {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            }
        }
    },
    created() {
        this.$store.dispatch('setUser', this.user)
    }
}
</script>