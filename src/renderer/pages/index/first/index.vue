<template>
  <div>
    <input type="button" @click="second" :value="name" />
  </div>
</template>
<script>
  export default {
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
    }
  }
</script>
