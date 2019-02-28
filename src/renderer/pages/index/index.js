/**
 * index.js
 */

import { store } from '@/utils/init';
import { router } from './router';

let vm = new Vue({
    template: '<router-view></router-view>',
    router,
    store
});

vm.$mount('#app');


