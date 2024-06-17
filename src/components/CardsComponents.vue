<template>
  <div class="cards-wrapper">
    <div class="card-container" v-for="cat in cats" :key="cat.id">
      <div class="card-component">
        <img :src="cat.url" class="cat-image" />
      </div>
      <div class="card-content">
        <div class="cat-info">
          <p class="cat-type">{{ catType }}</p>
          <button v-if="isFavorite(cat)" @click="removeFavoriteAction(cat)" class="favorite-button remove-favorite">
            <i class="fas fa-heart"></i>
            <span class="tooltip-text">Remover dos favoritos</span>
          </button>
          <button v-else @click="addFavoriteAction(cat)" class="favorite-button add-favorite">
            <i class="far fa-heart"></i>
            <span class="tooltip-text">Adicionar aos favoritos</span>
          </button>
        </div>
        <p class="cat-gender">Gênero: {{ cat.gender }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { faker } from "@faker-js/faker";

export default {
  name: "CardsComponents",
  props: {
    cats: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      catType: faker.animal.cat(),
    };
  },
  methods: {
    ...mapActions(["addFavoriteAction", "removeFavoriteAction"]),
    isFavorite(cat) {
      return this.getFavorites.some(favorite => favorite.id === cat.id);
    },
  },
  computed: {
    ...mapGetters(["getFavorites"]),
  },
};
</script>

<style scoped>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  margin: 10px;
  width: calc(33.33% - 20px); /* Ajuste para caber 3 por linha com margem */
  box-sizing: border-box;
}

.card-component {
  width: 100%;
  overflow: hidden;
}

.cat-image {
  width: 100%;
  height: 200px; /* Altura fixa para as imagens */
  object-fit: cover;
  transition: transform 0.3s;
}

.cat-image:hover {
  transform: scale(1.1);
}

.card-content {
  padding: 20px;
  text-align: center;
}

.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-size: 24px;
  transition: color 0.3s;
  padding: 0; /* Remover padding para ajustar ao texto */
}

.favorite-button:hover {
  color: #ff4500; /* Cor do ícone vermelho ao passar o mouse */
}

.favorite-button .fas,
.favorite-button .far {
  font-size: 24px;
}

.favorite-button .tooltip-text {
  visibility: hidden;
  width: 140px; /* Tamanho do tooltip */
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 110%; /* Ajusta a posição vertical */
  left: 50%;
  margin-left: -70px; /* Ajusta a posição horizontal */
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 14px; /* Tamanho da fonte do tooltip */
}

.favorite-button .tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.favorite-button:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.cat-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cat-info .cat-type {
  flex: 1; /* Ocupa todo o espaço possível */
  text-align: left; /* Alinha o texto à esquerda */
  margin-right: 10px; /* Espaçamento entre o texto e o botão */
}

.favorite-button {
  margin-left: auto; /* Alinha o botão à direita */
}

.cat-info p {
  margin: 0;
  color: #333;
  font-size: 16px;
}
</style>
