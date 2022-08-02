<template>
  <div class="item">
    <p>
      <span v-show="!isActive" v-on:click="activeItem">{{ item }}</span>
      <span v-show="!isActive">
        <input type="text" v-model="content" v-on:blur="inactiveItem"/>
      </span>
      <span v-on:click="$emit('deleteItem', index)">X</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['item', 'index'],
  data () {
    return {
      content: '',
      isActive: false
    }
  },
  methods: {
    activeItem () {
      this.isActive = true
      this.content = this.item
    },
    inactiveItem () {
      this.$emit('modifyItem', this.content, this.index)
      this.isActive = false
    }
  }
}
</script>

<style scoped>

</style>
