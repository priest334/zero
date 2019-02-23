<template>
  <div>
    <input type="button" @click="first" :value="name" />
  </div>
</template>
<script>
  export default {
    data: () => {
        return {
          name: 'second'
        };
    },
    methods: {
      first: function() {
        this.$router.push({name: 'first'})
      }
    },
    mounted: function() {
      console.log('second loaded');
    }
  }
</script>
