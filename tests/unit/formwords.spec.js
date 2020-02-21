import {mount} from '@vue/test-utils'
import FormWords from '@/components/FormWords.vue'

describe('FormWords.vue', () => {

  const words = 'Buenos Aires'

  const wrapper = mount(FormWords)
  wrapper.setData({words: words})

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('validates the max words', () => {
    expect(wrapper.vm.validateMaxWords()).toBe(true)
  })

})
