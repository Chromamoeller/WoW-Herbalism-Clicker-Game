import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    levelRangeClassic: [25, 50, 75, 100, 150, 225, 300],
    currentIndex: 0,
    player: {
      level: 1,
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
        Gromsblut: 0,
        GoldenerSansam: 0,
        Traumblatt: 0,
        Bergsilbersalbei: 0,
        Pestblüte: 0,
        Eiskappe: 0,
        SchwarzerLotus: 0,
      },
      herbalismClassicLevel: 1,
    },
    potions: {
      smallHealPotion: {
        name: "Einfacher Heiltrank",
        count: 0,
        ingredient1: {
          name: "Friedensblume",
          count: 3,
        },
        ingredient2: {
          name: "leere Phiole",
          count: 1,
        },
      },
    },
  },
  mutations: {
    collectHerbs(state, herb) {
      state.player.herbs[herb]++;
      if (
        state.player.herbalismClassicLevel >=
        state.levelRangeClassic[state.currentIndex]
      ) {
        state.player.level++;
        state.currentIndex++;
      }
      state.player.herbalismClassicLevel++;
    },
    showStats(state) {
      console.log(state.player.herbs);
    },
  },
  actions: {
    // Aktionen, um asynchrone Aufgaben auszuführen
  },
  getters: {
    // Getter, um auf den Zustand zuzugreifen
  },
});

export function useStore() {
  return store;
}

const app = createApp({
  /* deine App-Konfiguration */
});

app.use(store);
