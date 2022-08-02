<template>
  <div class="home">
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import '@/assets/style.css'

export default {
  name: 'HomeView',
  components: {
    TodoList
  }
}
</script>
