<template>
  <div id="app">
    <NavBar />
    <router-view class="app-view"></router-view>
  </div>
</template>

<script>
import NavBar from './components/shared/NavBar';

export default {
  name: 'app',
  components: {
      NavBar
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-view {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    position: relative;
    top: 0;
}
</style>
