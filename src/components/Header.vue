<template>
    <section class="admin-header bg-default">

        <navbar :background_color="'transparent'" :sidebar="true" style="margin-bottom: 5rem"></navbar>
        
        <div class="title">
            <h4 class="fw-bold text-white">{{ title }}</h4>
            <p class="text-white">{{ tagline }}</p>
        </div>

        <ul class="nav">
            <li class="nav-item" v-for="({title, url}, index) in all_screens" :key=index>
                <a :class="['nav-link', 'text-white', 'text-uppercase', {'active' : screen == index + 1 }]" @click="switchScreen(index + 1, url)">{{ title }}</a>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_admin_header.scss';
</style>

<script>
import Navbar from '../components/Navbar'

export default {
    name: "AdminHeader",
    props: {
        title: {
            required: true,
            type: String
        },
        tagline: {
            required: true,
            type: String
        },
        all_screens: {
            required: false,
            type: Object
        },
        screen: {
            required: false, 
            type: Number
        },
        url: {
            required: false, 
            type: String
        }
    },
    components: {
        Navbar
    },
    methods: {
        switchScreen(value, url) {
            this.$emit('update:screen', value)
            this.$emit('update:url', url)
        }
    }
}
</script>