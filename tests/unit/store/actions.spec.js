import actions from '@/store/actions'

describe('actions', () => {
  it('play_move calls commit with payload', () => {
    const expected_payload = jest.fn()
    const context = {
      commit: jest.fn()
    }
    actions.play_move(context, expected_payload)
    expect(context.commit).toHaveBeenCalledWith(
      'update_board',
      expected_payload
    )
  })
})
