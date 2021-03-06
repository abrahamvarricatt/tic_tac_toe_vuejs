import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  gameworld: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  game_progress: 'in-progress',
  progress_bar: 0
}

export default {
  state,
  mutations,
  actions,
  getters
}
