/**
 * index.js
 */

import { router, store } from '../../init-vue';
import index from './index.vue';

let vm = new Vue({
    components: { index },
    template: '<index/>',
    router,
    store
});

vm.$mount('#app');
