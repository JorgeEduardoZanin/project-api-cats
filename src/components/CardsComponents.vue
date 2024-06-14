<template>
    <div>
        <div class="cardContainer">
            <div class="cardComponent">
                <img :src="cat.url" />
            </div>
        </div>
        <div>
            <button @click="addFavoriteAction(cat)">Adicionar aos favoritos</button>
            <div class="catInfo">
                <p>Tipo: {{ catType }}</p>
                <p>Gênero: {{ catGender }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
import { faker } from '@faker-js/faker';

export default {
    name: "CardsComponents",
    props: {
        cat: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            catType: faker.animal.cat(), 
            catGender: Math.random() > 0.5 ? 'male' : 'female', 
        };
    },
    methods: {
        ...mapActions(['addFavoriteAction'])
    }
};
</script>

<style>

.cardComponent {
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;
    margin: 20px;
    box-sizing: border-box;
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 290px;
    height: 290px;
    border-radius: 6px;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 2em;
    color: #ccc;
    transition: color 0.3s ease;
}

.catInfo {
    font-family: Georgia; 
    color: #371f1a
}

</style>