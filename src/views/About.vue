<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <p>{{ data }}</p>
    <button type="button" v-on:click="testAxios()">testAxios</button>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'about',
  store,
  data () {
    return {
      msg: store.state.count,
      data: ''
    }
  },
  methods: {
    testAxios () {
      this.axios.get('/test').then((response) => {
        console.log(response.data.data)
        this.data = response.data.msg
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>
