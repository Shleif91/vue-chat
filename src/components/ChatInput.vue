<template>
    <div class="chat-input">
        <div class="form-inline">
            <input type="text" class="form-control" v-model="text" @keyup.enter="sendMessage()">
            <button class="btn btn-info" @click="sendMessage()">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods: {
            sendMessage() {
                this.$emit('sendMessage', {
                    id: Math.random() * (100000 - 3) + 3,
                    text: this.text,
                    user: 'Shleif'
                });
                this.text = '';
            }
        }
    }
</script>