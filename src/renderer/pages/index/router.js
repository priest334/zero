/**
 * router.js
 */


import VueRouter from 'vue-router'
Vue.use(VueRouter);

import first from '@/pages/index/first/index.vue'
import second from '@/pages/index/second/index.vue'

console.log(first);
console.log(second);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'first',
            component: first
        },
        {
            path: '/second',
            name: 'second',
            component: second
        }
    ]
});

router.beforeEach((to, from, next) => {
});

export {
    router
};

