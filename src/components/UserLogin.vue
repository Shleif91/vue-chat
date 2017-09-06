<template>
    <div>
        <div class="form-inline">
            <input type="text" class="form-control" v-model="username">
            <button class="btn btn-info" @click="logIn()">Log in</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: ''
            }
        },
        methods: {
            logIn() {
                this.$emit('logIn', this.username)
            }
        }
    }
</script>