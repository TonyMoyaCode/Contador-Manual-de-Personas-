import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

// Crear la instancia de la aplicación
const app = createApp(App);

// Crear e integrar Pinia como el gestor de estado
const pinia = createPinia();
app.use(pinia);

// Montar la aplicación en el nodo #app
app.mount('#app');
