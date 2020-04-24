import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameworld: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    game_progress: 'in-progress'
  },
  mutations: {},
  actions: {},
  modules: {}
})
