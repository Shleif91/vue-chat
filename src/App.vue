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
                        user: 'Shleif',
                        text: 'test1'
                    },
                    {
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
        }
    }
</script>