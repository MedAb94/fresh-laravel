import axios from 'axios'

const state = {
    loadingThemes: false,
    themes: [],
    theme: '',
};
const getters = {
    loadingThemes: (state) => state.themes,
    allThemes: (state) => state.themes,
    theme: (state) => state.theme,
};

const actions = {
    async fetchThemes({commit}) {
        commit('setLoadingThemes', true);
        const response = await axios.get('/themes');
        commit('setThemes', response.data);
        commit('setLoadingThemes', false);
    },
    async fetchTheme({commit}, id) {
        commit('setLoadingThemes', true);
        const response = await axios.get('/themes/'+id);
        commit('setTheme', response.data);
        commit('setLoadingThemes', false);
    },


};
const mutations = {
    setLoadingThemes: (state, val) => (state.loadingThemes = val),
    setThemes: (state, val) => (state.themes = val),
    setTheme: (state, val) => (state.theme = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
