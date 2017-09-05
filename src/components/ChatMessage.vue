<template>
    <div class="message">
        <p>{{ message.text }}</p>
        <small>{{ message.user }}</small>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>