<template>
  <div id="app">

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      result: ''
    }
  },
  created(){
    axios({
      url: ''
    }).then(res => {
      this.result = res.data
    })
  }
}
</script>

<style>

</style>
