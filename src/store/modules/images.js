//https://api.imgur.com/3/account/me/images
import api from '../../api/imgur';
import {router} from '../../main';
const state = {
    images: []
}

const getters = {
    allImages: state => state.images
}

const actions = {
    async fetchImages({ commit, rootState }) { //rootstate allows us to acces data or modules based on the vuex store config
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);

        commit('setImages', response.data.data)
    },
    async uploadImages({ commit, rootState }, images) {
        const { token } = rootState.auth;
        await api.uploadImages(token, images);

        router.push('/');
        
    }
}

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}