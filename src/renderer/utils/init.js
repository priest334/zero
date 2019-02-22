/**
 * init.js
 */

import Vue from 'vue'
import Vuex from 'vuex'
import {store as account} from './account'

global.Vue = Vue;
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        account
    }
});

export {
    store
};


