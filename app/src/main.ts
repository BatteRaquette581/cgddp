import './assets/tailwind.css'
import './assets/utility.css'

import Nav from "../src/components/Nav.vue";
import Welcome from "../src/components/Welcome.vue";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
    .component("Nav", Nav)
    .component("Welcome", Welcome)

app.use(router)

app.mount('#app')
