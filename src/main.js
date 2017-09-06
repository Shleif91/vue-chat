import Vue from 'vue'
import App from './App.vue'
import VueWebSocket from "vue-websocket";

Vue.use(VueWebSocket);

Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-input', require('./components/ChatInput.vue'));

new Vue({
    el: '#app',
    render: h => h(App)
});
