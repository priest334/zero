<template>
  <div id="app">
    <input type="button" @click="setValue" value="setValue" />
    <input type="button" @click="toAbout" :value="name" />
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data: () => {
        return {
            name: 'index'
        };
    },
    methods: {
      setValue: function() {
        console.log(this.$store);
        this.$store.commit('uin', 123);
      },
      toAbout: function() {
        this.$router.push({name: 'about'});
        //window.location.href = 'about.html';
      }
    },
    mounted: function() {
      console.log(this);
    }
  }
</script>
