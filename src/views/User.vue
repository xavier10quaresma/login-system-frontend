<template>
    <div class="row">

        <!-- Card Component -->
        <div class="col-6">
            <card-component>
                <div class="row">
                    <div class="col-12 text-center">
                        <h3>{{ user.first_name }} {{ user.last_name }}</h3>
                        <hr class="mx-4 mt-n1">
                        <a href="javascript:void(0)" @click="logout">Logout</a>
                    </div>
                </div>
            </card-component>
        </div>

        <!-- Table -->
        <div class="col-6 mt-5">
            <table class="table table-hover table-bordered bg-secondary">
                <caption class="text-center text-active">By: Xavier Quaresma Domingos - 2021</caption>
                <thead class="text-primary text-center lead">
                    <tr>
                        <th>USUÁRIO</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody class="text-white">
                    <tr v-for="(user, index) in users" :key="index">
                        <td scope="row">{{ user.first_name }} {{ user.last_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <button v-if="user.email !== $store.getters.getUser.email" class="btn rounded btn-danger" @click="remove(user._id)">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

import axios from 'axios'
import cardComponent from '../components/cardComponent.vue'


export default {
    name: 'User',
    components: { cardComponent },
    data() {
        return {
            users: [],
            user: ''
        }
    },
    created() {
        this.getUsers()
        this.getUser()
        this.$store.state.colSize = 'col-8'
    },
    methods: {
        
        // Get All Users
        async getUsers() {
            const response = await axios.get('/')
            this.$store.dispatch('setUsers', response.data)
            this.users = this.$store.getters.getUsers

        },

        // Get an User
        async getUser () {
            const responseUse = await axios.get('/' + this.$store.getters.getUser._id)
            console.log(this.$store.getters.getUser._id)

            this.user = responseUse.data
        },

        // Delete User
        async remove(id) {
            const responseDelete = await axios.delete('/' + id)
            console.log(responseDelete)
            this.getUsers()
        },

        // Logout Session
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/')
        }

    }

}
</script>