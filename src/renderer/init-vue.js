/**
 * init-vue.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(Vuex);

global.Vue = Vue;

const store = new Vuex.Store({
    modules: {
        user: {
            state: {
                uin: 111,
                token: '000'
            },
            getters: {
                uin: state => state.uin,
                token: state => state.token
            },
            mutations: {
                uin: (state, _uin) => {state.uin = _uin;},
                token: (state, _token) => {state.token = _token;}
            }
        }
    }
});

const router = new VueRouter({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: require('@/pages/index/index.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: require('@/pages/about/index.vue')
        }
    ]
});

export {
    router,
    store
};


