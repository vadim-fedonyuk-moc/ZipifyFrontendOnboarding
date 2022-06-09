import '../styles/application.css';
import App from './App';
import { createApp } from 'vue';

// Here's your starting point for {javascript, vue} development

const app = createApp(App);

app.mount(document.querySelector('[data-app]'));
