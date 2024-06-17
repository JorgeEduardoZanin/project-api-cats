<template>
  <div class="home">
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




