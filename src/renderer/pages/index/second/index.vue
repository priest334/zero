<template>
  <div>
    <input type="button" @click="first" :value="name" />
  </div>
</template>
<script>
  export default {
    name: 'second',
    data: () => {
        return {
        };
    },
    methods: {
      first: function() {
        console.log(this);
      }
    },
    mounted: function() {
      console.log('second loaded');
    }
  }
</script>
