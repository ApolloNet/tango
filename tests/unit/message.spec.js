import {mount} from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {

  const message = 'Message in the bottle'
  const wrapper = mount(Message)
  wrapper.setProps({message: message})

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the div.message', () => {
    expect(wrapper.classes()).toContain('message')
  })

  it('renders the message text', () => {
    expect(wrapper.text()).toBe(message)
  })
})
