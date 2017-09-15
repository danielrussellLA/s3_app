<template>
<div class="hello">
  <h1>{{ data.title }}</h1>
  <h2>{{ data.subhead }}</h2>
  <h3>{{ data.description }}</h3>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      data: ''
    }
  },
  created () {
    axios.get('https://s3.amazonaws.com/openmailcontent/dan_PCH_test/nation_experiment/sample_data/sample.json').then((data) => {
        console.log(data.data)
        this.data = data.data.data;
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
