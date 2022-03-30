<template>
    <div class="all-stats">
        <h5 class="content-title text-dark fw-bold mb-4">Your Stats</h5>
    
        <div class="row gx-2">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
                <div class="card stats info">
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="card-icon"> 
                                <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
                            </span>

                            <h3 class="fw-bold mt-auto mb-auto ms-4">300</h3>
                        </div>
                        <p class="card-icon-title mt-2">Subscribers</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
                <div class="card stats primary" style="border-radius: 15px;">
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="card-icon"> 
                                <font-awesome-icon class="icon" :icon="['fab', 'galactic-republic']" /> 
                            </span>

                            <h3 class="fw-bold mt-auto mb-auto ms-4">16</h3>
                        </div>

                        <p class="card-icon-title mt-2">Users in System</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
                <div class="card stats info" style="border-radius: 15px;">
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="card-icon"> 
                                <font-awesome-icon class="icon" :icon="['fa', 'envelope']" /> 
                            </span>

                            <h3 class="fw-bold mt-auto mb-auto ms-4">160</h3>
                        </div>
                        <p class="card-icon-title mt-2">Emails sent!</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
                <div class="card stats primary" style="border-radius: 15px;">
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="card-icon"> 
                                <font-awesome-icon class="icon" :icon="['fa', 'dollar-sign']" /> 
                            </span>

                            <h3 class="fw-bold mt-auto mb-auto ms-4">{{ formatNumber('20000') }}</h3>
                        </div>
                        <p class="card-icon-title mt-2">Users in System</p>
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
    name: 'Stats',
    methods: {
        formatNumber (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
    }
}
</script>