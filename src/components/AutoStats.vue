<template>
    <div class="all-stats">
        <div class="row gx-2">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-2" v-for="({title, value, icon, color, index}) in stats_data" :key="index">
                <div :class='["card", "stats", color]'>
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="card-icon"> 
                                <font-awesome-icon class="icon" :icon="['fa', icon]" /> 
                            </span>

                            <h3 class="fw-bold mt-auto mb-auto ms-4">{{ formatNumber(value) }}</h3>
                        </div>
                        <p class="card-icon-title mt-2">{{ title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_stats.scss';
</style>


<script>
export default {
    name: 'AutoStats',
    props: {
        stats_data: {
            required: true,
            type: Object
        }
    },
    methods: {
        formatNumber (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
    }
}
</script>