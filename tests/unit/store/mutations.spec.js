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
    mutations.UPDATE_BOARD(state, payload)
    expect(state.gameworld[1][0]).toBe('X')
  })
  it('should decrement progressbar by 1', () => {
    const progress_bar = 10
    const state = { progress_bar }
    mutations.DECREMENT_PROGRESS_BAR(state)
    expect(state.progress_bar).toBe(9)
  })
  it('should set value of progressbar to what was passed in', () => {
    const original_value = 0
    const new_value = 20
    const payload = {
      progress_bar: new_value
    }
    const progress_bar = original_value
    const state = { progress_bar }
    expect(state.progress_bar).toBe(original_value)
    mutations.SET_PROGRESS_BAR(state, payload)
    expect(state.progress_bar).toBe(new_value)
  })
})
