/**
 * index.js
 */

import { store } from '@/utils/init';
import { router } from './router';

let vm = new Vue({
    router,
    store
});

vm.$mount('#app');


