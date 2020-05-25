import my_utils from '@/utils'

export default {
  /**
   * Record player's move to game board
   *
   * After updating the board state, will set progressbar to 100 and start
   * process to decrement it slowly (for animation effect).
   */
  play_move(context, payload) {
    context.commit('UPDATE_BOARD', payload)
    context.commit('SET_PROGRESS_BAR', { progress_bar: 100 })
    context.dispatch('decrement_progress_bar')
  },
  /**
   * Decrements progressbar value
   *
   * Will commit mutation to decrement progress bar, then calculate a timeout
   * period and dispatch action for that timeout.
   */
  async decrement_progress_bar(context) {
    const progress_bar = context.getters.progressbar
    // random delay between 1 and 100
    let timeout = Math.floor(Math.random() * 100) + 1
    if (progress_bar === 1) {
      timeout = 500 // Gives user a moment to see bar become zero
    } else if (progress_bar === 100) {
      timeout = 2000 // Gives user chance for bootstrap animation to fill bar
    }
    context.commit('DECREMENT_PROGRESS_BAR')
    await context.dispatch('delay_and_continue', timeout)
  },
  /**
   * Delay for the specified time_period and dispatch decrement_or_play
   * afterwards
   */
  async delay_and_continue(context, time_period) {
    await my_utils.sleep(time_period) // NOTE: we can't unit-test this :(
    context.dispatch('decrement_or_play')
  },
  /**
   * Decide between decrementing progress bar or playing AI move.
   *
   * If progressbar is greater than 0, decrement it. Else, play CPU move.
   */
  decrement_or_play(context) {
    const progress_bar = context.getters.progressbar
    if (progress_bar > 0) {
      context.dispatch('decrement_progress_bar')
    } else {
      context.commit('UPDATE_BOARD', { x: 1, y: 2, display: 'O' })
    }
  }
}
