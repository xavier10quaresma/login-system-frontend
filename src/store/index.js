import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: '',
        users: [],
        error: '',
        errorExist: false,
        colSize: ''
    },
    mutations: { // Sincrous
        setUser(state, payload) {
            state.user = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setErrorExist(state, payload) {
            state.errorExist = payload
        }
    },   
    actions: { // Assyncrous

        setUser({ commit }, payload) {
            commit('setUser', payload)
        },
        setUsers({ commit }, payload) {
            commit('setUsers', payload)
        },
        setError({ commit }, payload) {
            commit('setError', payload)
        }
        
    },
    getters: {
        getUser: state => { return state.user },
        getUsers: state => { return state.users },
        getError: state => { return state.error },
        getErrorExist: state => { return state.errorExist }
    },
})
