<template>
  <form v-show="show" @submit.prevent id="form-words" class="form">
    <div class="form-item">
      <label for="input-words">Search</label>
      <input 
        v-model="words"
        id="input-words"
        class="form-text"
        type="text"
        placeholder="Space separated words. 5 max"
      >
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormWords',
  props: {
    wordsMinLetters: {
      type: Number,
      default: 3
    },
    wordsMax: {
      type: Number,
      default: 5
    },
    show: Boolean
  },
  data: function () {
    return {
      words: ''
    }
  },
  updated: function () {
    if (this.validateMaxWords()) {
      this.$emit('hilight-words', this.words)
    }
  },
  methods: {
    validateMaxWords: function () {
      const wordsCount = this.words.split(' ').length
      return wordsCount <= this.wordsMax
    }
  }
}
</script>
