<template>
<div class="category">
  <h1>{{ $route.params.category }}</h1>
  <a :href="samplePage">Sample Article</a>
</div>
</template>

<script>
import axios from 'axios';
import { templateConfigsRoute } from '../../config/index'

export default {
  name: 'category',
  data() {
    return {
        samplePage: '#/travel/sample-luxury-cruises'
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
