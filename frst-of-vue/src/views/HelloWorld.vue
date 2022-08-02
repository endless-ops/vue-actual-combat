<template>
  <div class="">
    <input v-model="words" type="text"/>
    <p>{{words}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      words:'Hello World'
    }
  }
}
</script>

<style scoped>

</style>