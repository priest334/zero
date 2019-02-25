<template>
  <div>
    <input type="button" @click="first" :value="name" />
  </div>
</template>
<script>
  import {mixin as account} from '@/utils/account';

  export default {
    mixins: [account],
    data: () => {
        return {
          name: 'second'
        };
    },
    methods: {
      first: function() {
        this.$router.push({name: 'first'});
      }
    },
    mounted: function() {
      console.log('second loaded');
      console.log({uin: this.uin, token: this.token});
    }
  }
</script>
