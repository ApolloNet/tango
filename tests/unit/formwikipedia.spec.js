import {mount} from '@vue/test-utils'
import FormWikipedia from '@/components/FormWikipedia.vue'

const axios = require('axios').default

describe('FormWikipedia.vue', () => {

  const pageURL = 'https://en.wikipedia.org/wiki/Astor_Piazzolla'
  const apiURL = 'https://en.wikipedia.org/api/rest_v1/page/html/Astor_Piazzolla'
  const html = '<html><head><title>Mock</title></head><body><h1>Title</h1></body></html>'

  const wrapper = mount(FormWikipedia)
  wrapper.setData({
    wikipediaURL: pageURL
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('validates wikipedia page url', () => {
    expect(wrapper.vm.validateUrl()).toBe(true)
  })

  it('gets wikipedia api url', () => {
    expect(wrapper.vm.getApiUrl()).toBe(apiURL)
  })

  it('gets response text', () => {
    const options = wrapper.vm.getFetchOptions()
    axios.get(apiURL, options)
      .then(response => wrapper.vm.getReponseText(response))
      .then(html => expect(html).toBeTruthy())
  })

  it('gets the body tag from an html string', () => {
    expect(wrapper.vm.getcontent(html)).toEqual('<h1>Title</h1>')
  })
})
