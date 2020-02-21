<template>
  <div v-show="show" class="message">
    <div class="container">
      <div class="row">
        <div class="column column-100">
          {{message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: String
  },
  computed: {
    show: function () {
      return this.message && this.message.length != ''
    }
  }
}
</script>
