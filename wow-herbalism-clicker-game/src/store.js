import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
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
        Gromsblut: 0,
        GoldenerSansam: 0,
        Traumblatt: 0,
        Bergsilbersalbei: 0,
        Pestblüte: 0,
        Eiskappe: 0,
        SchwarzerLotus: 0,
      },
    },
  },
  mutations: {
    collectHerbs(state, herb) {
      state.player.herbs[herb]++;
      console.log(herb);
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
