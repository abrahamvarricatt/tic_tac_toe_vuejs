import getters from '@/store/getters'

describe('getters', () => {
  it('gameworld returns gameworld state', () => {
    const gameworld = []
    const state = { gameworld }
    const result = getters.gameworld(state)
    expect(result).toBe(gameworld)
  })
  it('progressbar returns value in state', () => {
    const progress_bar = 23
    const state = { progress_bar }
    const result = getters.progressbar(state)
    expect(result).toBe(progress_bar)
  })
})
