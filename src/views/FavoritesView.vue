<template>
    <div>
      <h1>Seus Gatos Favoritos</h1>
      <div class="cards-wrapper">
        <CardsComponents :cats="getFavorites" />
      </div>

      <div style="height: 451px;"></div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import CardsComponents from '@/components/CardsComponents.vue';
  
  export default {
    name: "FavoritesView",
    components: {
      CardsComponents
    },
    computed: {
      ...mapGetters(['getFavorites'])
    }
  };
  </script>
  
  <style scoped>
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  h1{
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
    color:#333;
  }
  </style>
  