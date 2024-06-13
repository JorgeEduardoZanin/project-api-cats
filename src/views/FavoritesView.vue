<template>
    <div>
        <h1>Seus Gatos Favoritos</h1>
        <div class="card">
            <cardComponent v-for="favorite in getFavorites" :key="favorite.id" :cats="favorite" />
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cardComponent from '@/components/CardsComponents.vue';

export default {
    name: "FavoritesView",
    components: {
        cardComponent
    }, 
    computed: {
        ...mapGetters(['getFavorites'])
    }



    }

</script>

