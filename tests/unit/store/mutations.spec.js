import mutations from '@/store/mutations'

describe('mutations', () => {
  it('should update board at specified co-ordinates', () => {
    const gameworld = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    const state = {
      gameworld
    }
    const payload = {
      x: 1,
      y: 0,
      display: 'X'
    }
    expect(state.gameworld[1][0]).toBe('')
    mutations.update_board(state, payload)
    expect(state.gameworld[1][0]).toBe('X')
  })
})
