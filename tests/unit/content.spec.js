import {mount} from '@vue/test-utils'
import Content from '@/components/Content.vue'

describe('Content.vue', () => {

  const contentText = 'Content theme'
  const content = `<section><div><p>${contentText}</p></div></section>`
  const wrapper = mount(Content)
  wrapper.setProps({content: content})

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the div.main-content', () => {
    expect(wrapper.classes()).toContain('main-content')
  })

  it('renders the content', () => {
    const wrapperText = wrapper.find('section div p').text()
    expect(wrapperText).toBe(contentText)
  })
})
