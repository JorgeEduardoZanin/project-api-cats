<template>
    <div>
        <h1>Seus Gatos Favoritos</h1>
        <div class="card" v-if="getFavorites.length > 0">
            <CardsComponents v-for="favorite in getFavorites" :key="favorite.id" :cat="favorite" />
            
        </div>
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



    }

</script>

<style>


</style>