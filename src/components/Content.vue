<template>

    <div class="container">
        <div class="content-wrapper">
            <div class="content">

                <!-- <stats></stats> -->

                <lists></lists>

            </div>                                          
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_content.scss';
</style>

<script>
import Lists from './Lists'

export default {
    name: 'Content',
    components: {
        Lists,
        // Stats,
        AdminHeader
    },  
    data () {
        return {
            search: ''
        }
    }
}
</script>