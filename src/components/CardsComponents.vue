<template>
    <div class="cards-wrapper">
        <div class="card-container" v-for="cat in cats" :key="cat.id">
            <div class="card-component">
                <img :src="cat.url" class="cat-image" />
            </div>
            <div class="card-content">
                <div class="cat-info">
                    <p class="cat-type">{{ cat?.breeds[0]?.name }}</p>
                    <div class="favorite-actions">
                        <button v-if="isFavorite(cat)" @click="removeFavoriteAction(cat)"
                            class="favorite-button remove-favorite">
                            <i class="fas fa-heart"></i>
                            <span class="tooltip-text">Remover dos favoritos</span>
                        </button>
                        <button v-else @click="addFavoriteAction(cat)" class="favorite-button add-favorite">
                            <i class="far fa-heart"></i>
                            <span class="tooltip-text">Adicionar aos favoritos</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "CardsComponents",
    props: {
        cats: {
            type: Array,
            required: true,
        },
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
    width: calc(30% - 20px);
    box-sizing: border-box;
}

.card-component {
    width: 100%;
    overflow: hidden;
}

.cat-image {
    width: 100%;
    height: 280px;
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

.cat-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.cat-type {
    margin: 0;
}

.favorite-actions {
    margin-left: 20px;
    display: flex;
    align-items: center;
}

.favorite-button {
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    font-size: 24px;
    transition: color 0.3s;
    padding: 0;
    margin-top: 1px;
}

.favorite-button:hover {
    color: #cf1f00e8;
}

.favorite-button .fas,
.favorite-button .far {
    font-size: 24px;
}

.favorite-button .tooltip-text {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 14px;
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

.cat-info p {
    margin: 0;
    color: #333;
    font-size: 16px;
}

@media (max-width: 1200px) {
    .card-container {
        width: calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
}

@media (max-width: 768px) {
    .card-container {
        width: calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
}

@media (max-width: 480px) {
    .card-container {
        width: calc(100% - 20px);
        max-width: calc(100% - 20px);
    }
}
</style>
