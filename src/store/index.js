import api from '@/https/api'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    song: [
      {url:''}
    ],

  },
  getters: {
  },
  mutations: {
    SETSONGURL(state, payload) {
      state.song = payload;
      console.log(state.song);
    }
  },
  actions: {
    async getSongUrlAsync({ commit }, payload) {

      const { data } = await api.song.getSongUrl(payload);
      commit("SETSONGURL",data.data);
    },
    async getSongListAsync(context, payload) {
      const { data } = await api.song.getSongList(payload);
      context.dispatch("getSongUrlAsync",data.songs[0].id);
    }
  },
  modules: {
  }
})
