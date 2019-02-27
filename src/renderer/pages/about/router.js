/**
 * router.js
 */


import VueRouter from 'vue-router'
Vue.use(VueRouter);


import index from '@/pages/about/index.vue';


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        }
    ]
});

export {
    router
};

