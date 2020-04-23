<template>
  <div class="row">
    <div class="col">
      <button
        type="button"
        class="btn btn-block my-3"
        :class="themeClass"
        @click="onClick"
      >
        {{ label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Random text'
    },
    theme: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    themeClass: function() {
      let theme = this.theme
      let valid_themes = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ]
      if (valid_themes.indexOf(theme) === -1) {
        theme = 'primary'
      }
      return 'btn-' + theme
    }
  },
  methods: {
    onClick() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped></style>
