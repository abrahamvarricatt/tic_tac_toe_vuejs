<template>
  <div class="progress my-3">
    <div
      class="progress-bar"
      role="progressbar"
      :style="width_style"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    width_style: function() {
      return {
        width: this.progress + '%'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
