<template>
<div class="home">
  <h1>Home</h1>
  <p>{{ msg }}</p>
  <HelloWorld></HelloWorld>
</div>
</template>

<script>
import HelloWorld from "@/views/HelloWorld";
export default {
  name: "Home",
  data() {
    return {
      msg :'我是Home组件'
    }
  },
  components: {  // 必须使用大括号
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
}
</style>