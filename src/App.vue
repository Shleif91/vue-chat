<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>Chat</h1>
                <chat-log :messages="messages"></chat-log>
                <chat-input @sendMessage="addMessage"></chat-input>
            </div>
            <div class="col-md-6">
                <h1>User</h1>
                <user-login @logIn="logIn"></user-login>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: [],
                username: 'Shleif',
                socket: null
            }
        },
        created() {
            const self = this;
            let ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
            this.socket = new WebSocket(ws_scheme + "://" + window.location.host + "/chat/");

            this.socket.onmessage = function(e) {
                console.log(e.data)
            };

            this.socket.onopen = function() {
                self.socket.send("connect");
            };

            this.socket.onclose = function() {
                self.socket.send("disconnect");
            };

            if (this.socket.readyState === WebSocket.OPEN) {
                this.socket.onopen();
            }
        },
        methods: {
            addMessage(message) {
                message.user = this.username;
                this.messages.unshift(message);
                this.socket.send(this.username)
            },
            logIn(username) {
                this.username = username;
            }
        }
    }
</script>