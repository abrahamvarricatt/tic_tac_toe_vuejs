import actions from '@/store/actions'

describe('play_move action', () => {
  it('should update board with passed in payload', () => {
    const expected_payload = jest.fn()
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn()
    }
    actions.play_move(context, expected_payload)
    expect(context.commit).toHaveBeenCalledWith(
      'UPDATE_BOARD',
      expected_payload
    )
  })
  it('should set progress_bar state to 100', () => {
    const expected_payload = {
      progress_bar: 100
    }
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn()
    }
    actions.play_move(context, {})
    expect(context.commit).toHaveBeenCalledWith(
      'SET_PROGRESS_BAR',
      expected_payload
    )
  })
  it('should dispatch action to decrement progress_bar', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn()
    }
    actions.play_move(context, {})
    expect(context.dispatch).toHaveBeenCalledWith('decrement_progress_bar')
  })
})
