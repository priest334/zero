<template>
  <div>
    <input type="button" value="first" @click="showFirst" />
    <input type="button" value="second" @click="showSecond" />
    <div style="display:block; border: 1px solid blue; width:100%; height:100%">
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showFirst: function() {
        this.$router.push({name: 'first'});
      },
      showSecond: function() {
        this.$router.push({name: 'second'});
      }
    },
    mounted: function() {
      //this.$router.push({name: 'first'});
      console.log('index loaded');
    }
  }
</script>
