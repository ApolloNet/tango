<template>
  <div>
    <header class="main-header">
      <div class="container">
        <div class="row">
          <div class="column column-20">
            <h1>Tango</h1>
          </div>
          <FormWikipedia 
            @display-message="message = $event" 
            @display-content="content = $event" 
            class="column column-33"
          />
          <FormWords 
            :show="content ? true : false" 
            @hilight-words="words = $event"
            class="column column-33"
          />
        </div>
      </div>
    </header>
    <Message :message="message" class="column"/>
    <Content :content="content" :words="words"/>
  </div>
</template>

<script>
import FormWikipedia from './components/FormWikipedia.vue'
import FormWords from './components/FormWords.vue'
import Content from './components/Content.vue'
import Message from './components/Message.vue'

export default {
  name: 'App',
  components: {
    FormWikipedia,
    FormWords,
    Content,
    Message
  },
  data: function () {
    return {
      words: '',
      content: '',
      message: ''
    }
  },
  metaInfo: {
    title: 'Tango',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'shortcut icon',
        href: 'favicon.ico',
        type: 'image/ico'
      }
    ]
  }
}
</script>
