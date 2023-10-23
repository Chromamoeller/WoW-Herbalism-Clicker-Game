<template>
  <LeftSide />
  <RightSide />
</template>

<script>
import LeftSide from './components/LeftSide.vue';
import RightSide from './components/RightSide.vue';


export default {
  name: 'App',
  components: {
    LeftSide,
    RightSide
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
