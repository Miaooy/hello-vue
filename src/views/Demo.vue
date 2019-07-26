<template>
<div>
  <ul>
    <li v-for="(item, index) in lists" v-bind:key="index" v-bind:class="{active: index === current && current !== ''}"
        v-on:click="choose(index)">
      {{ item }}
    </li>
  </ul>
  <button type="button" v-on:click="add()">添加</button>
  <ul>
    <li v-for="(item, index) in target" v-bind:key="index">
      {{ item }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      current: '',
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      target: []
    }
  },
  methods: {
    choose (index) {
      this.current = index
    },
    add () {
      if (this.current === '') { return }
      this.target.push(this.lists[this.current])
      this.current = ''
    }
  }
}
</script>

<style scoped>
li.active {
  background: #42b983;
}
</style>
