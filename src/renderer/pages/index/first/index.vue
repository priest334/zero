<template>
  <div>
    <input type="button" @click="second" :value="name" />
  </div>
</template>
<script>
  import {mixin as account} from '@/utils/account';

  export default {
    mixins: [account],
    data: () => {
        return {
          name: 'first'
        };
    },
    methods: {
      second: function() {
        this.$router.push({name: 'second'});
      }
    },
    mounted: function() {
      console.log('first loaded');
      console.log({uin: this.uin, token: this.token});
    }
  }
</script>
