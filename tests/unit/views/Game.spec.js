import { shallowMount } from '@vue/test-utils'
import Game from '@/views/Game'

describe('Game.vue', () => {
  it('renders correctly', () => {
    let wrapper = shallowMount(Game)
    expect(wrapper.element).toMatchSnapshot()
  })
})
