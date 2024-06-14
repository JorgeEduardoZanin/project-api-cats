import { createStore } from "vuex";

export default createStore({
    state: {
        favorites: [],
    },
    getters: {
        getFavorites(state) {
            return state.favorites;
        },
    },
    mutations: {
        addFavorite(state, favorite) {
            state.favorites.push(favorite);
        },
    },
    actions: {
        addFavoriteAction(context, newFavorite) {
            if(this.state.favorites.find(item => item.id === newFavorite.id)) {
                alert ('Esse gatinho ja foi adicionado aos favoritos!')
            }
            else {
                context.commit("addFavorite", newFavorite)
                alert ('Novo gatinho adicionado aos favoritos! (=^･ω･^=)')
            }
        },
    },
    modules: {},
});