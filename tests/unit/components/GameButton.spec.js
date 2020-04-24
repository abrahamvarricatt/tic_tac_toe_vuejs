import { shallowMount } from '@vue/test-utils'
import GameButton from '@/components/GameButton'

describe('GameButton.vue', () => {
  it('should display blank image when neither X nor O is passed as prop', () => {
    let wrapper = shallowMount(GameButton, {
      propsData: {
        display: 'random-text'
      }
    })
    let image_element = wrapper.find('img')
    expect(image_element.attributes('src')).toBe(require('@/assets/blank.svg'))
  })

  it('should display cross image when X is passed as prop', () => {
    let wrapper = shallowMount(GameButton, {
      propsData: {
        display: 'X'
      }
    })
    let image_element = wrapper.find('img')
    expect(image_element.attributes('src')).toBe(require('@/assets/close.svg'))
  })

  it('should display circle image when O is passed as prop', () => {
    let wrapper = shallowMount(GameButton, {
      propsData: {
        display: 'O'
      }
    })
    let image_element = wrapper.find('img')
    expect(image_element.attributes('src')).toBe(require('@/assets/dot.svg'))
  })

  it('should emit a game-click event when link is clicked', () => {
    let wrapper = shallowMount(GameButton)
    let anchor = wrapper.find('a')
    anchor.trigger('click')
    expect(wrapper.emitted('game-click')).toHaveLength(1)
  })

  it('should pass along x and y props with emitted event', () => {
    let expected_x = Math.floor(Math.random() * 100)
    let expected_y = Math.floor(Math.random() * 100)
    let wrapper = shallowMount(GameButton, {
      propsData: {
        x: expected_x,
        y: expected_y
      }
    })
    let anchor = wrapper.find('a')
    anchor.trigger('click')
    let emitted_payload = wrapper.emitted('game-click')[0][0]
    expect(emitted_payload.x).toEqual(expected_x)
    expect(emitted_payload.y).toEqual(expected_y)
  })
})
