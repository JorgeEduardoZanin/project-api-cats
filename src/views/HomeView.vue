<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SectionRandomCat :msg="'Welcome to Your Vue.js App'"/>
  </div>
</template>

<script>

import SectionRandomCat from '@/components/SectionRandomCat.vue'

export default {
  name: 'HomeView',
  components: {
    SectionRandomCat
  }
}
</script>
