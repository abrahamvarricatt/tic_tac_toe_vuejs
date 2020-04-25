export default {
  update_board(state, payload) {
    let gameworld = JSON.parse(JSON.stringify(state.gameworld))
    gameworld[payload.x][payload.y] = payload.display
    state.gameworld = gameworld
  }
}
