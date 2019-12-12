<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-button>click me</b-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
