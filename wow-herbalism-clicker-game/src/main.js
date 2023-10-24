import { createApp } from "vue";
import App from "./App.vue";
import { useStore } from "./store"; // Passe den Pfad zu deiner Store-Datei an

const app = createApp(App);

const store = useStore();
app.use(store);

app.mount("#app");
