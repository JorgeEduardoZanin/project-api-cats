<template>
  <div class="cats">
    <h1 class="titulo">Escolha seus gatos favoritos!</h1>
    <div class="cards-container">
      <CardsComponents :cats="cats" />
    </div>
  </div>
</template>

<script>
import { getCats } from "../services/HttpService.js";
import CardsComponents from "../components/CardsComponents.vue";

export default {
  name: "CatsView",
  data() {
    return {
      cats: [],
    };
  },
  components: {
    CardsComponents,
  },
  methods: {
    async getCat() {
      try {
        const response = await getCats();
        this.cats = response.data;
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    },
  },
  created() {
    this.getCat();
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.titulo {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 27px;
}
</style>

