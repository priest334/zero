
/**
 * router.js
 */


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index from '@/pages/index/index.vue';
import first from '@/pages/index/first/index.vue';
import second from '@/pages/index/second/index.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: '/first',
                    name: 'first',
                    component: first
                },
                {
                    path: '/second',
                    name: 'second',
                    component: second
                }
            ]
        },   
    ]
});

// router.beforeEach((to, from, next) => {
// });

export {
    router
};

