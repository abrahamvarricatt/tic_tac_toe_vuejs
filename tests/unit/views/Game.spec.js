import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Game from '@/views/Game'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Game.vue', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = {
      getters: {
        gameworld: jest.fn()
      }
    }
    store = new Vuex.Store(storeOptions)
  })

  it('renders correctly', () => {
    const game_world = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    storeOptions.getters.gameworld.mockReturnValue(game_world)
    let wrapper = shallowMount(Game, {
      localVue,
      store
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
