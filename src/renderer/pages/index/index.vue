<template>
  <div id="index" style="background-color: rgb(255,0,0); height: 100%;">
    <div style="height: 10%; background-color: rgb(0,255,255);">
      <input type="button" value="first" @click="showFirst" />
      <input type="button" value="second" @click="showSecond" />
    </div>
    <div style="height: 90%; background-color: rgb(255,0,255)">xx
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import {mixin as account} from '@/utils/account';

  export default {
    mixins: [account],
    methods: {
      showFirst: function() {
        this.setUin(111);
        this.setToken('first');
        this.$router.push({name: 'first'});
      },
      showSecond: function() {
        this.setUin(222);
        this.setToken('second');
        this.$router.push({name: 'second'});
      }
    },
    mounted: function() {
      console.log('index loaded1');
    }
  }
</script>
