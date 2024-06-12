<template> 
    <button @click="addFavoriteAction(cats)">Adicionar aos favoritos</button>
</template>

<script> 
import { mapActions } from 'vuex'; 

export default {
    name: "CardComponent", 
    props: {
        cats: {
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
    button {
        width: 100px;
        height: 20px;
    }
</style>