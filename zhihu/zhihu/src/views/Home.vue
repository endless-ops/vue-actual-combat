<template>
  <div class="home">
    <main-header></main-header>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'HomeView',
  components: {
    MainHeader
  }
}
</script>
