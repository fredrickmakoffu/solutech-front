<template>
    <div class="container">
        <div class="row">
            <ul class="col-12 nav">
                <div class="d-flex mx-auto">
                    <li class="nav-item" v-for="({title}, index) in all_screens" :key=index>
                        <a :class="['nav-link', 'text-white', 'text-uppercase', {'active' : screen == index }]" @click="switchScreen(index)">{{ title + ':' + index + ': ' + screen}}</a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_admin_header.scss';
</style>

<script>
export default {
    name: 'Screens',
    props: {
        screen: {
            required: true,
            type: Number
        },
        all_screens: {
            required: true,
            type: Object
        },
    },
    methods: {
        switchScreen(value) {
            this.$emit('update:screen', value)
        }
    },
    mounted() {
        console.log(this.all_screens);
        console.log(this.screen);
    }
}
</script>