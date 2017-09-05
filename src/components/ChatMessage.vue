<template>
    <div class="message">
        <p>{{ message }}</p>
        <small>{{ user }}</small>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'hello',
                user: 'Shleif'
            }
        }
    }
</script>