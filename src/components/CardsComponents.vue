<template> 
    <button @click="addFavoriteAction(cat)">Adicionar aos favoritos</button>
    <div class="cardComponent">
        <img :src="cat.url" />
        <div class="card-body">
        </div>
    </div>
</template>

<script> 
import { mapActions } from 'vuex'; 

export default {
    name: "CardsComponents", 
    props: {
        cat: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions(['addFavoriteAction'])
    }
};

</script>

<style>

.cardComponent {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    margin: 10px;
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box; 
}

.cardImg {
    width: 100%;
    height: auto;
}

.card-body {
    padding: 15px;
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

</style>