import { createApp } from 'vue';
import App from './App.vue';
import API from './modules/client'

import { createRouter, createWebHistory } from "vue-router";
import ClientView from './views/ClientView.vue';
import HomeView from './views/HomeView.vue';
import mitt from 'mitt';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/clients',
            component: ClientView
        }, 
        {
            path: '/',
            component: HomeView
        }
      ]
});

const eventbus = mitt();
const api = new API();

const app = createApp(App).use(router);
app.provide('eventbus', eventbus);
app.provide('api', api);
app.mount('#app');