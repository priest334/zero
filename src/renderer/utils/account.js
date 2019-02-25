/**
 * account.js
 */

import { mapState, mapMutations } from 'vuex';

const Name = 'account';

const store = {
    state: {
        uin: 0,
        token: ''
    },
    mutations: {
        setUin: (state, value) => {
            state.uin = value;
        },
        setToken: (state, value) => {
            state.token = value;
        }
    }
};

const mixin = {
    computed: {
        ...mapState({
            uin: state => state[Name].uin,
            token: state => state[Name].token
        })
    },
    methods: {
        ...mapMutations([
            'setUin',
            'setToken'
        ])
    }
};

function attach(modules = {}) {
    modules[Name] = store;
}

export {
    attach,
    store,
    mixin 
};


