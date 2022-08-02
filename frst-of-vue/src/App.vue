<template>
  <div id="app">
    <p>{{getText}}</p>
    <router-link to="/">Home</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text :''
    }
  },
  computed : {
    getText() {
      return this.text = '这是vue'
    }
  }
}
</script>

<style>

</style>
