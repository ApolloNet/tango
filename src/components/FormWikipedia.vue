<template>
  <form @submit.prevent id="form-wikipedia" class="form">
    <div class="form-item">
      <label for="input-wikipedia">Wikipedia page URL</label>
      <input
        v-model="wikipediaURL"
        id="input-wikipedia"
        class="form-text"
        type="text"
        placeholder="Eg. https://en.wikipedia.org/wiki/Tango_music"
      >
    </div>
  </form>
</template>

<script>
const axios = require('axios').default

export default {
  name: 'FormWikipedia',
  data () {
    return {
      wikipediaURL: ''
    }
  },
  updated () {
    this.fetchWikipedia()
  },
  methods: {
    fetchWikipedia () { 
      if (!this.validateUrl()) {
         this.$emit('display-message', '⚠️ Not a wikipedia.org URL')
        return
      }
      this.$emit('display-message', '')
      const url = this.getApiUrl()
      const options = this.getFetchOptions()
      axios.get(url, options)
        .then(response => this.getReponseText(response))
        .then(html => this.getcontent(html))
        .then(content => {
          this.$emit('display-content', content)
        })
        .catch(err => {
           this.$emit('display-message', `⚠️ ${err}`)
        })
    },
    validateUrl: function() {
      return this.wikipediaURL.includes('wikipedia.org')
    },
    getApiUrl () {
      const url = new URL(this.wikipediaURL)
      const protocol = 'https://'
      const hostname = url.hostname
      const endpoint = '/api/rest_v1/page/html/'
      const page = url.pathname.split('/')[2]
      return protocol + hostname + endpoint + page
    },
    getFetchOptions: function() {
      const headers = new Headers()
      headers.append('Api-User-Agent', 'alex@apollonet.fr')
      return {
        headers: headers,
        mode: 'cors',
        cache: 'default'
      }
    },
    getReponseText (response) {
      const responseStatusFirstDigit = Math.floor(response.status / 100)
      const okStatus = [2, 3].includes(responseStatusFirstDigit)
      if (okStatus) {
        return response.data
      }
       this.$emit('display-message', `⚠️ ${response.statusText}`)
      return
    },
    getcontent (html) {
      const parser = new DOMParser()
      const dom = parser.parseFromString(html, 'text/xml')
      const content = dom.getElementsByTagName('body')[0].innerHTML
      return content
    }
  }
}
</script>
