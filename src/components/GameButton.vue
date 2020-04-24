<template>
  <div>
    <a @click.prevent="$emit('game-click', { x: x, y: y })">
      <img :src="image_path" class="mx-auto d-block" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    display: {
      type: String,
      default: ''
    }
  },
  computed: {
    image_path: function() {
      let image_path = require('@/assets/blank.svg')
      if (this.display === 'X') {
        image_path = require('@/assets/close.svg')
      } else if (this.display === 'O') {
        image_path = require('@/assets/dot.svg')
      }
      return image_path
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 70px;
img {
  width: $size;
  height: $size;
}
</style>
