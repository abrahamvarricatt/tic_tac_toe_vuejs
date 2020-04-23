<template>
  <div class="view-home">
    <div class="row">
      <div class="col">
        <img
          src="../assets/tic-tac-toe.svg"
          alt="Tic Tac Toe logo"
          class="mx-auto my-3 d-block logo"
        />
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h1 class="display-4">Tic Tac Toe</h1>
        <br />
      </div>
    </div>
    <bigbutton label="START"></bigbutton>
    <bigbutton label="HOW TO PLAY" theme="warning"></bigbutton>
    <bigbutton label="ABOUT GAME" theme="info"></bigbutton>
  </div>
</template>

<script>
// @ is an alias to /src
import bigbutton from '@/components/BigButton'

export default {
  name: 'Home',
  components: {
    bigbutton
  }
}
</script>

<style scoped lang="scss">
.logo {
  width: 150px;
  height: 150px;
}
</style>
