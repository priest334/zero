/**
 * account.js
 */

 import { mapMutations } from 'vuex';

const store = {
    state: {
        account: {}
    },
    mutations: {
        account: (state, options = {}) => {
            state.account = Object.assign(state.account, options);
        }
    }
};

const mixin = {
    computed: {
        account: {
            get: function() {
                return this.$store.state.account;
            },
            set: function(options) {
                this.$store.commit('account', options);
            }
        }
    }
};

export {
    store,
    mixin 
};

