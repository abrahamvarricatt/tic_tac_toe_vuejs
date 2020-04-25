import getters from '@/store/getters'

describe('getters', () => {
  it('gameworld returns gameworld state', () => {
    const gameworld = []
    const state = { gameworld }
    const result = getters.gameworld(state)
    expect(result).toBe(gameworld)
  })
})
