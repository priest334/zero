<template>
  <div>
    <input type="button" @click="setValue" value="setValue" />
    <input type="button" @click="toIndex" :value="name" />
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
      },
      toIndex: function() {
        //this.$router.push({name: 'index'});
        //window.location.href = 'index.html';
      }
    },
    mounted: function() {
      console.log(this);
    }
  }
</script>
