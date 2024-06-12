<script>
import { mapGetters } from 'vuex';
import CardComponent from '../components/CardsComponent'

export default {
    name: "FavoritesView",
    components: {
        CardComponent
    }, 
    computed: {
        ...mapGetters(['getFavorites'])
    }
}
</script>