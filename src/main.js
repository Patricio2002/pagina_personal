import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

createApp(App).mount('#app')
