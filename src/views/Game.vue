<template>
  <div>
    <!-- Title -->
    <div class="row">
      <div class="col text-center">
        <h1 class="display-4 title">Game Page</h1>
        <br />
      </div>
    </div>
    <!-- Game Board -->
    <div class="row">
      <div class="col">
        <table>
          <tbody>
            <tr>
              <td>
                <gamebutton :x="0" :y="0" :display="game_world[0][0]" />
              </td>
              <td>
                <gamebutton :x="0" :y="1" :display="game_world[0][1]" />
              </td>
              <td>
                <gamebutton :x="0" :y="2" :display="game_world[0][2]" />
              </td>
            </tr>
            <tr>
              <td>
                <gamebutton :x="1" :y="0" :display="game_world[1][0]" />
              </td>
              <td>
                <gamebutton :x="1" :y="1" :display="game_world[1][1]" />
              </td>
              <td>
                <gamebutton :x="1" :y="2" :display="game_world[1][2]" />
              </td>
            </tr>
            <tr>
              <td>
                <gamebutton :x="2" :y="0" :display="game_world[2][0]" />
              </td>
              <td>
                <gamebutton :x="2" :y="1" :display="game_world[2][1]" />
              </td>
              <td>
                <gamebutton :x="2" :y="2" :display="game_world[2][2]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import gamebutton from '../components/GameButton'
export default {
  components: {
    gamebutton
  },
  computed: {
    game_world: function() {
      return this.$store.state.gameworld
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  @extend .mx-auto;
  border: 3px;
  border-style: solid;
}
table tr {
  border: 3px;
  border-style: solid;
}
table tr td {
  border: 3px;
  border-style: solid;
}

button {
  margin: 10px;
  width: 70px;
  height: 70px;
}
</style>
