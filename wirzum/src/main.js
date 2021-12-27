import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Tabs from 'vue3-tabs';
import VueUniversalModal from 'vue-universal-modal'
import 'vue-universal-modal/dist/index.css'
import 'vue3-carousel/dist/carousel.css';

createApp(App)
    .use(router)
    .use(Tabs)
    .use(VueUniversalModal, {
        teleportTarget: '#modals',
        modalComponent: 'Modal',
    }).mount('#app')
