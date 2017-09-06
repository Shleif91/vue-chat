import Vue from 'vue'
import App from './App.vue'

Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-input', require('./components/ChatInput.vue'));
Vue.component('user-login', require('./components/UserLogin.vue'));

new Vue({
    el: '#app',
    render: h => h(App)
});
