const search = {
    state: {
        Search: ""
    },
    getters: {
        getSearch(state) {
            return state.Search;
        }
    },
    mutations: {
        updateSearch(state, value) {
            state.Search = value
        }
    }
}
export default search