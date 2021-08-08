import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "Register" */ '../views/Home')
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "Register" */ '../views/Login')
        },
        {
            path: '/register',
            component: () => import(/* webpackChunkName: "Register" */ '../views/Register')
        },
        {
            path: '/user/:email',
            component: () => import(/* webpackChunkName: "Register" */ '../views/User')
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "Register" */ '../views/404')
        }
    ]
})