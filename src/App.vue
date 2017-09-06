<template>
    <div>
        <h1>chat</h1>
        <chat-log :messages="messages"></chat-log>
        <chat-input @sendMessage="addMessage"></chat-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: [
                    {
                        id: 1,
                        user: 'Shleif',
                        text: 'test1'
                    },
                    {
                        id: 2,
                        user: 'Shleif',
                        text: 'test2'
                    }
                ]
            }
        },
        methods: {
            addMessage(message) {
                this.messages.push(message);
            }
        },
        socket: {
            // Prefix for event names
             prefix: "/chat/",

            // If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
            // namespace: "/counter",

            events: {

                // Similar as this.$socket.on("changed", (msg) => { ... });
                // If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
                //
                changed(msg) {
                    console.log("Something changed: " + msg);
                },

                // common socket.io events
                connect() {
                    console.log("Websocket connected to " + this.$socket.nsp);
                },

                disconnect() {
                    console.log("Websocket disconnected from " + this.$socket.nsp);
                },

                error(err) {
                    console.error("Websocket error!", err);
                }
            }
        }
    }
</script>