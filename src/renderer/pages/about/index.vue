<template>
  <div id="app">
    <input type="button" @click="setValue" value="setValue" />
    <input type="button" @click="toIndex" :value="name" />
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'about',
    data: () => {
        return {
            name: 'about'
        };
    },
    methods: {
      setValue: function() {
        console.log(this.$store);
        this.$store.commit('uin', 456);
      },
      toIndex: function() {
        this.$router.push({name: 'index'});
        //window.location.href = 'index.html';
      }
    },
    mounted: function() {
      console.log(this);
    }
  }
</script>
