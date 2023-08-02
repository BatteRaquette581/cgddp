import './assets/tailwind.css'
import './assets/utility.css'

import Nav from "../src/components/Nav.vue";
import Welcome from "../src/components/Welcome.vue";
import Tier from "../src/components/Tier.vue";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app
    .component("Nav", Nav)
    .component("Welcome", Welcome)
    .component("Tier", Tier)

app.use(router);

app.mount('#app');
