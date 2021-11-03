require('./bootstrap');

window.Vue = require('vue').default;

import router from './router/index';
import store from "./store/index";
import IndexDB from './api/IndexDB';
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";

import App from "./components/App";

Vue.use(BootstrapVue)
   .use(BootstrapVueIcons);


const app = new Vue({
    el: '#app',
    components: {App},
    router,
    store,
    IndexDB,
});

