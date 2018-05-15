import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
const state = {
    token: window.localStorage.getItem('imgur_token')
}

const getters = {
    isLoggedIn: (state) => !!state.token //turn a value into a boolean
}

const actions = {
    logout: ({ commit }) => { //access mutations via commit
        commit('setToken', null);
    },
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token)
        //navigate user to another page
        router.push('/');
    }

}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
        window.localStorage.setItem('imgur_token', token);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}