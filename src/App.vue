<template>
  <div id="app">
    <quote-header></quote-header>
    <div class="title">
      <h2>Add new qoute:</h2>
    </div>
    <new-qoute></new-qoute>
    <all-qoutes></all-qoutes>
  </div>
</template>

<script>
import quoteHeader from "./components/shared/header.vue";
import NewQoute from "./components/NewQoute";
import AllQoutes from "./components/AllQoutes";

export default {
  name: "app",
  components: {
    quoteHeader,
    NewQoute,
    AllQoutes
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .title {
    padding: 15px;
    margin:1rem;
    font-family: "coolFont";
  }

}
  @font-face {
  font-family: coolFont;
  src: url(./assets/fonts/Amsterdam-VwYy.ttf);
  font-weight: bold;
}
</style>
