export default {
  play_move(context, payload) {
    context.commit('update_board', payload)
  }
}
