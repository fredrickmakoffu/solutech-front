<template>
    <h1 class="mx-auto text-center cancel mb-0">
        <font-awesome-icon class="text-burgundy fw-bold" :icon="['fas', 'ban']"></font-awesome-icon>
    </h1>
    <h6 class="text-center mt-2">{{ message }}</h6>    
</template>

<style lang="scss" scoped>
    @import  '../assets/scss/helpers/_breakpoints.scss';

    .cancel {
        font-size: 9rem;

        @include media('<tablet') {
            font-size: 4rem;
        }
    }
</style>

<script>
    export default {
        name: "NoData",
        props: ['message']
    }
</script>