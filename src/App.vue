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
                username: 'Shleif'
            }
        },
        created() {
            this.messages = [
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
        },
        methods: {
            addMessage(message) {
                message.user = this.username;
                this.messages.unshift(message);
            },
            logIn(username) {
                this.username = username;
            }
        }
    }
</script>