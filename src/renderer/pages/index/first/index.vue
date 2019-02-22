<template>
  <div>
    <input type="button" @click="second" :value="name" />
  </div>
</template>
<script>
  export default {
    name: 'first',
    data: () => {
        return {
        };
    },
    methods: {
      second: function() {
        console.log(this);
      }
    },
    mounted: function() {
      console.log('first loaded');
    }
  }
</script>
