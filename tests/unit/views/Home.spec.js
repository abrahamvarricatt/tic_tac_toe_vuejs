import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'
import BigButton from '@/components/BigButton'

describe('Home.vue', () => {
  it('should display a logo', () => {
    let wrapper = shallowMount(Home)
    let logo_element = wrapper.find('img')
    expect(logo_element.classes()).toContain('logo')
  })

  it('should show a button with START text', () => {
    let wrapper = shallowMount(Home)
    let start_button = wrapper
      .findAll(BigButton)
      .filter(button => button.props('label') == 'START')
    expect(start_button.length).toBe(1) // Did we find the button?
  })

  it('should show a button with HOW TO PLAY text', () => {
    let wrapper = shallowMount(Home)
    let start_button = wrapper
      .findAll(BigButton)
      .filter(button => button.props('label') == 'HOW TO PLAY')
    expect(start_button.length).toBe(1) // Did we find the button?
  })

  it('should should a button with ABOUT GAME text', () => {
    let wrapper = shallowMount(Home)
    let start_button = wrapper
      .findAll(BigButton)
      .filter(button => button.props('label') == 'ABOUT GAME')
    expect(start_button.length).toBe(1) // Did we find the button?
  })
})
