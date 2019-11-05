import { shallowMount, createLocalVue } from '@vue/test-utils'
import HighLightTool from '@/components/HighLightTool'

describe('Component', () => {
  const localVue = createLocalVue()
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HighLightTool, {
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
