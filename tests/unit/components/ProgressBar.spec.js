import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar'

describe('ProgressBar.vue', () => {
  it('should show a progress bar', () => {
    const wrapper = shallowMount(ProgressBar)
    let progress_bar_element = wrapper.find('.progress-bar')
    expect(progress_bar_element).toBeTruthy()
  })

  it('should set width to value passed as props', () => {
    let expected_progress = 25
    const wrapper = shallowMount(ProgressBar, {
      propsData: {
        progress: expected_progress
      }
    })
    let progress_bar_element = wrapper.find('.progress-bar')
    expect(progress_bar_element.attributes('aria-valuenow')).toBe(
      expected_progress.toString()
    )
  })
})
