<template>
    <section class="small-admin-header bg-default">

        <navbar :sidebar="false" :background_color="'transparent'" style="margin-bottom: 3rem"></navbar>

        <div class="title text-center">
            <h3 class="fw-bold text-white">{{ title }}</h3>
            <p class="text-white">{{ tagline }}</p>
        </div>

        <div class="container">
            <div class="row">
                <ul class="col-12 nav">
                    <div class="d-flex mx-auto">
                        <li class="nav-item" v-for="({title}, index) in all_screens" :key=index>
                            <a :class="['nav-link', 'text-white', 'text-uppercase', {'active' : screen == index + 1 }]" @click="switchScreen(index + 1)">{{ title }}</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>       
    </section>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_admin_header.scss';
    
    .breadcrumbs {
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
    }
    
</style>

<script>
import Navbar from '../components/Navbar'


export default {
    name: "SmallAdminHeader",
    props: {
        title: {
            required: true,
            type: String
        },
        tagline: {
            required: true,
            type: String
        },
        screen: {
            required: true,
            type: Number
        },
        if_screens: {
            required: false,
            type: Boolean
        },
        all_screens: {
            required: false,
            type: Object
        },
        sidebar: {
            required: false,
            type: Boolean
        }
    },
    components: {
        Navbar
    },
    methods: {
        switchScreen(value) {
            // this.$emit('update:screen', value)
            alert(value)
        }
    },
    
}
</script>