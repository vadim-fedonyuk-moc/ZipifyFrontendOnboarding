import '../styles/application.css';
import App from './App';
import { createApp } from 'vue';
import router from './router';
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";


const app = createApp(App);

app.use(VueAxios, axios)
app.use(store)
app.use(router);
app.mount(document.querySelector('[data-app]'));

