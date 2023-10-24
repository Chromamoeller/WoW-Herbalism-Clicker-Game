<template>
  <LeftSide :player="player" @collected="childData" />
  <RightSide />
</template>

<script>
import LeftSide from "./components/LeftSide.vue";
import RightSide from "./components/RightSide.vue";

export default {
  name: "App",
  data() {
    return {
      player: {
        level: 10,
        herbs: {
          Friedensblume: 0,
          Silberblatt: 0,
          Erdwurzel: 0,
          Marguskönigskraut: 0,
          Wilddornrose: 0,
          Würgetang: 0,
          Beulengras: 0,
          Wildstahlblume: 0,
          Grabmoos: 0,
          Königsblut: 0,
          Lebenswurz: 0,
          BlassBlatt: 0,
          Golddorn: 0,
          KhadgarsSchnurrbart: 0,
          Winterbiss: 0,
          Feuerblüte: 0,
          LilaLotus: 0,
          ArthasTränen: 0,
          Sonnengras: 0,
          Blindkraut: 0,
          Geisterpilz: 0,
          GoldenerSansam: 0,
          Traumblatt: 0,
          Bergsilbersalbei: 0,
          Pestblüte: 0,
          Eiskappe: 0,
          SchwarzerLotus: 0,
        },
      },
    };
  },
  components: {
    LeftSide,
    RightSide,
  },
  methods: {
    childData(data) {
      for (let herb in this.player.herbs) {
        if (herb == data.herb) {
          this.player.herbs[herb] += data.count;
          console.log(this.player.herbs[herb]);
        }
      }
    },
  },
};
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
