<template>
  <div>
    hello info component;
    <button type="button" @click="add()">添加</button>
  </div>

</template>

<script>
import store from '@/store'
export default {
  name: 'Info',
  store,
  methods: {
    add () {
      store.commit('increase')
    }
  }
}
</script>

<style scoped>

</style>
