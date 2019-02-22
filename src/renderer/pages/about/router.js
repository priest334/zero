/**
 * router.js
 */


import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('@/pages/about/index.vue')
        }
    ]
});

export {
    router
};

