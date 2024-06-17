<template>
  <div class="about">
    <div class="cards-container">
      <CardsComponents :cats="cats" />
    </div>
  </div>
</template>

<script>
import { getCats } from "../services/HttpService.js";
import CardsComponents from "../components/CardsComponents.vue";

export default {
  name: "AboutView",
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
</style>
