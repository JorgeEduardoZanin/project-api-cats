<template>
  <div class="about">
    <div v-for="cat in cats" :key="cat.id">
      <CardsComponents :cat="cat"/>
    </div>
  </div>
</template>

<script>
import { getCats } from "../services/HttpService.js"
import CardsComponents from "../components/CardsComponents.vue"

export default {
  name: "AboutView",
  data() {
    return {
      cats: [],
    };
  },
  components: {
    CardsComponents
  },
  methods: {
    async getCat() {
      const response = await getCats()

      this.cats = response.data;
    },
  },
  created() {
    this.getCat();
  },
};
</script>