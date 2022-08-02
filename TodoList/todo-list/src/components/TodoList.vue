<template>
  <div>
    <div class="input-part">
      <input type="text" v-model="words"/>
      <button v-on:click="insertItem"> 插入</button>
    </div>
    <ul>
      <li v-for="(item,index) of list" v-bind:key="index">
        <TodoListItem v-bind:item="item" v-bind:index="index" v-on:deleteItem="deleteItem" v-on:modifyItem="modifyItem"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
export default {
  name: 'TodoList',
  components: { TodoListItem },
  data () {
    return {
      words: '',
      list: []
    }
  },
  methods: {
    insertItem () {
      this.list.push(this.words)
    },
    deleteItem (index) {
      this.list.splice(index, 1)
    },
    modifyItem (newContent, index) {
      this.list.splice(index, 1, newContent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
