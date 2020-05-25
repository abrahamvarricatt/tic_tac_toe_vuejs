export default {
  UPDATE_BOARD(state, payload) {
    let gameworld = JSON.parse(JSON.stringify(state.gameworld))
    gameworld[payload.x][payload.y] = payload.display
    state.gameworld = gameworld
  },
  SET_PROGRESS_BAR(state, payload) {
    state.progress_bar = payload.progress_bar
  },
  DECREMENT_PROGRESS_BAR(state) {
    state.progress_bar -= 1
  }
}
