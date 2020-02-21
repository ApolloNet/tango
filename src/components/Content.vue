<template>
  <main v-html="content" :data-words="words" id="main-content" class="main-content container"></main>
</template>

<script>
import Mark from 'mark.js'

export default {
  name: 'Content',
  props: {
    content: String,
    words: String
  },
  updated: function () {
    this.hilightWords()
  },
  methods: {
    hilightWords: function () {
      const context = document.querySelector('#main-content')
      const instance = new Mark(context)
      const options = this.getMarkOptions()
      instance.unmark(options)
      if (this.words) {
        instance.mark(this.words, options)
      }
    },
    getMarkOptions: function () {
      return {
        acrossElements: true,
        className: 'stabilo'
      }
    }
  }
}
</script>
