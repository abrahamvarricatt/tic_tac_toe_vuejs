<template>
  <div class="container-fluid app-background">
    <div class="container app-foreground">
      <router-view />
    </div>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
</template>

<style lang="scss">
.app-background {
  // Background styling START
  // ref: https://codepen.io/byrass/pen/JYrxLX
  background: linear-gradient(135deg, black 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, black 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, black 25%, transparent 25%),
    linear-gradient(45deg, black 25%, transparent 25%);
  background-size: 2em 2em;
  background-color: #232323;
  // Background styling STOP
  height: 100vh;
  padding: 0;
}

.app-foreground {
  background-color: white;
  height: 100%;
  width: 350px;
}
</style>
