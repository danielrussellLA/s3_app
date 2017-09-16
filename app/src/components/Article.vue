<template>
<div class="article">
  <div v-if="!layout">please wait...</div>
  <component :is="layout" :content_info="content_info" v-else/>
</div>
</template>

<script>
import axios from 'axios';
import { templateConfigsRoute } from '../../config/index'
import layouts from './layouts'

export default {
  name: 'article',
  data() {
    return {
      layout: null,
      content_info: {}
    }
  },
  created() {
      axios.get(`${templateConfigsRoute}${this.$route.params.title}.json`)
        .then((data) => {
          this.content_info = data.data.content_info
          this.layout = layouts[data.data.content_info.cta_type]
        })
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
