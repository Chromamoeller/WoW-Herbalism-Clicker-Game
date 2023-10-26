import { createApp } from "vue";
import App from "./App.vue";
import { useStore } from "./store"; // Passe den Pfad zu deiner Store-Datei an
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions);

const store = useStore();
app.use(store);

app.mount("#app");
