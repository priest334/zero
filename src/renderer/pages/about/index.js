/**
 * index.js
 */

import { store } from '../../utils/init';
import { router } from './router';
import index from './index.vue';

let vm = new Vue({
    components: { index },
    template: '<index/>',
    router,
    store
});

vm.$mount('#app');
