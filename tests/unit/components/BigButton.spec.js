import { shallowMount } from '@vue/test-utils'
import BigButton from '@/components/BigButton'

describe('BigButton.vue', () => {
  it('should contain a button element', () => {
    let wrapper = shallowMount(BigButton)
    let button_element = wrapper.find('button')
    expect(button_element).toBeTruthy()
  })

  it('should have class btn assigned to button element', () => {
    let wrapper = shallowMount(BigButton)
    let button_element = wrapper.find('button')
    expect(button_element.classes()).toContain('btn')
  })

  it('should display default button text', () => {
    let wrapper = shallowMount(BigButton)
    let button_element = wrapper.find('button')
    expect(button_element.text()).toBe('Random text')
  })

  it('should display a default color-theme', () => {
    let wrapper = shallowMount(BigButton)
    let button_element = wrapper.find('button')
    expect(button_element.classes()).toContain('btn-primary')
  })

  it('should display custom text', () => {
    let custom_text = 'Hello World'
    let wrapper = shallowMount(BigButton, {
      propsData: {
        label: custom_text
      }
    })
    let button_element = wrapper.find('button')
    expect(button_element.text()).toBe(custom_text)
  })

  it('should display a custom selected color-theme', () => {
    let wrapper = shallowMount(BigButton, {
      propsData: {
        theme: 'info'
      }
    })
    let button_element = wrapper.find('button')
    expect(button_element.classes()).toContain('btn-info')
  })

  it('should fallback to a default theme when invalid theme is selected', () => {
    let wrapper = shallowMount(BigButton, {
      propsData: {
        theme: 'invalid-theme'
      }
    })
    let button_element = wrapper.find('button')
    expect(button_element.classes()).toContain('btn-primary')
  })

  it('should fire an event when button is clicked', () => {
    let wrapper = shallowMount(BigButton)
    let button_element = wrapper.find('button')
    button_element.trigger('click')
    expect(wrapper.emitted('clicked')).toHaveLength(1)
  })
})
