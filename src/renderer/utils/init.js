
/**
 * init.js
 */

import Vue from 'vue'
import Vuex from 'vuex'

window.Vue = Vue;
Vue.use(Vuex);

const storeHelper = {
    modules: {},
    push: function(src = '') {
        const {attach} = require(`${src}`);
        attach(this.modules);
    }
};

storeHelper.push('./account');

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: storeHelper.modules
});

export {
    store
};


