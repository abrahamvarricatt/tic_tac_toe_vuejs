import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Game from '@/views/Game'
import ProgressBar from '@/components/ProgressBar'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Game.vue', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = {
      getters: {
        gameworld: jest.fn(),
        progressbar: jest.fn()
      }
    }
    store = new Vuex.Store(storeOptions)
    const game_world = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    storeOptions.getters.gameworld.mockReturnValue(game_world)
  })

  it('renders correctly', () => {
    const wrapper = shallowMount(Game, {
      localVue,
      store
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain a progressbar element', () => {
    const wrapper = shallowMount(Game, {
      localVue,
      store
    })
    const progressbar_element = wrapper.find(ProgressBar)
    expect(progressbar_element).toBeTruthy()
  })

  it('should render progressbar state corresponding to value in store', () => {
    let expected_progress = 28
    storeOptions.getters.progressbar.mockReturnValue(expected_progress)
    const wrapper = shallowMount(Game, {
      localVue,
      store
    })
    const progressbar_element = wrapper.find(ProgressBar)
    expect(progressbar_element.props().progress).toBe(expected_progress)
  })
})
